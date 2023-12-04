import { useEffect, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { ScrumBoard } from "./components/scrumBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getUsers } from "./hasura/getUserData";
import { getStories } from "./hasura/getStories";
import { getTasks } from "./hasura/getTasks";
import { createStory } from "./hasura/createStory";
import { signIn, signOut, getCurrentUser } from "./auth";
import { createUser_simpleScrum } from "./hasura/createUser";
import { createTask } from "./hasura/createTask";
import { updateStoryTasks } from "./hasura/updateStories";

const categories = ["tasks", "todos", "doings", "dones"];
const fakeData = [
  {
    id: null,
    tasks: ["Temp task!"],
    todos: ["Temp todo!"],
    doings: ["Temp doing!"],
    dones: ["Temp dones!"],
  },
];

// This function adds blank strings to the arrays,
// making them all equal length,
// so each category in each story is the same height
function padData(storyData) {
  const maxLength = Math.max(
    ...categories.map((category) => storyData[category].length)
  );
  categories.forEach((category) => {
    const lengthDiff = maxLength - storyData[category].length;
    storyData[category] = [
      ...storyData[category],
      ...Array(lengthDiff).fill(""),
    ];
  });
  return storyData;
}

const SimpleScrumMain = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(fakeData);
  const [user, setUser] = useState();
  const [newData, setNewData] = useState(false);

  // holds the state in one object for simplicity
  const state = {
    input: input,
    setInput: setInput,
    data: data,
    setData: setData,
    setNewData: setNewData,
  };

  useEffect(() => {
    getCurrentUser().then((x) => {
      if (x) {
        getUsers(x.attributes.email).then((res) => {
          setUser(res);
          return res;
        });
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut().then((x) => {
      setUser(null);
      setData(fakeData);
    });
  };

  // takes the input and creates a new task
  // placing it in the todo column in the propper story
  // adds it to hasura
  const handleClick_newTask = () => {
    const newStory = {
      tasks: [input],
      todos: [],
      doings: [],
      dones: [],
    };
    setData([...data, newStory]);
    createTask(input).then((taskID) => {
      createStory(user.id, taskID);
    });
    setInput("");
  };

  // get data from hasura and setData
  useEffect(() => {
    if (user) {
      getStories(user.id).then((stories) => {
        const fetchData = async () => {
          const tempArr = [];

          await Promise.all(
            stories.map(async (story) => {
              let tempData = { ...fakeData[0] };
              tempData.id = story.id;
              const tasksPromise = getTasks(story.tasks);
              const todosPromise = getTasks(story.todos);
              const doingsPromise = getTasks(story.doings);
              const donesPromise = getTasks(story.dones);
              tempData.tasks = await tasksPromise;
              tempData.todos = await todosPromise;
              tempData.doings = await doingsPromise;
              tempData.dones = await donesPromise;
              tempArr.push(tempData);
            })
          );

          setData(tempArr);
        };

        fetchData();
      });
    }
  }, [user]);

  // any time the data gets updated, update hasura
  useEffect(() => {
    if (newData) {
      let newTask;
      let arrToUpdate;
      for (let i = 0; i < data.length; i++) {
        for (let y in data[i]) {
          if (Array.isArray(data[i][y])) {
            data[i][y].forEach((x) => {
              if (!x.id && x.text) {
                arrToUpdate = [...data[i][y]];
                console.log(data[i][y]);
                newTask = {
                  storyid: data[i].id,
                  taskid: null,
                  text: x.text,
                  category: y,
                };
              }
            });
          }
        }
      }
      createTask(newTask.text).then((taskID) => {
        const updatedArr = arrToUpdate.map((task) =>
          task.id ? task.id : taskID
        );
        updateStoryTasks(newTask.storyid, newTask.category, updatedArr);
      });
    }

    setNewData(false);
  }, [data]);

  // for display purposes, this function reorganizes the data into categories
  // so the browser can display the data via category columns
  const categorizedData = data
    .map((curr) => {
      return padData(curr);
    })
    .reduce(
      (acc, curr) => {
        let tempObj = { ...acc };
        tempObj.tasks = [...tempObj.tasks, curr.tasks.map((c) => c.text)];
        tempObj.todos = [...tempObj.todos, curr.todos.map((c) => c.text)];
        tempObj.doings = [...tempObj.doings, curr.doings.map((c) => c.text)];
        tempObj.dones = [...tempObj.dones, curr.dones.map((c) => c.text)];
        return tempObj;
      },
      { tasks: [], todos: [], doings: [], dones: [] }
    );

  return (
    <Box>
      <Button
        onClick={() => (window.location.href = `/login/simpleScrum`)}
        variant="contained"
      >
        LOG IN
      </Button>
      <Button onClick={handleSignOut} variant="contained">
        SIGNOOT
      </Button>
      <Button
        onClick={() => (window.location.href = `/signup/simpleScrum`)}
        variant="contained"
      >
        SUGBYO
      </Button>
      <Typography>Triple D Scrum</Typography>
      <TextField
        label="Add task"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <Button onClick={handleClick_newTask} variant="contained" />
      <DndProvider backend={HTML5Backend}>
        <Box display="flex">
          {categories.map((cat, i) => (
            <Box width={250} textAlign="center" padding={2} key={i}>
              <Typography>{cat}</Typography>
              <Box border="1px solid black" borderRadius={1}>
                <ScrumBoard
                  storyData={categorizedData[cat]}
                  state={state}
                  categoryIndex={i}
                  categoryTitle={cat}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </DndProvider>
    </Box>
  );
};

export default SimpleScrumMain;
