import { useEffect, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { ScrumBoard } from "./components/scrumBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getUsers } from "./hasura/getUserData";
import { getStories } from "./hasura/getStories";
import { getTasks } from "./hasura/getTasks";
import { signIn, signOut, getCurrentUser } from "./auth";

// const fakeData = [
//   {
//     tasks: ["Fix a bug"],
//     todos: ["Do this", "Do that"],
//     doings: ["doing this", "doing that", "doing itall"],
//     dones: ["this one is done"],
//   },
//   {
//     tasks: ["Add a nice new Feature!"],
//     todos: ["Do this", "Do that", "Much to do!"],
//     doings: ["doing this"],
//     dones: ["this one is done", "Another one is done! Long live the king!"],
//   },
//   {
//     tasks: ["Yet to be tasked out"],
//     todos: [],
//     doings: [],
//     dones: [],
//   },
// ];

const transformData = (inputData) => {
  const transformedData = {};

  inputData.forEach((item) => {
    const { tasks, storyid, id, category } = item;

    if (!transformedData[storyid]) {
      transformedData[storyid] = {
        tasks: [],
        todos: [],
        doings: [],
        dones: [],
      };
    }

    transformedData[storyid][categories[category]] = tasks;
  });

  return Object.values(transformedData);
};

const fakeData = [
  {
    tasks: [],
    todos: [],
    doings: [],
    dones: [],
  },
];

const categories = ["tasks", "todos", "doings", "dones"];

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

  const email = "brandonmchugh36@gmail.com";
  const password = "Brandmch1!";
  const username = "bmwow";
  const name = "Brandon";

  // holds the state in one object for simplicity
  const state = {
    input: input,
    setInput: setInput,
    data: data,
    setData: setData,
  };

  useEffect(() => {
    // signIn({ email, password }).then((x) => console.log(x));
    // signOut().then((x) => console.log(x));
    getCurrentUser().then((x) => console.log(x));

    getUsers(email)
      .then((res) => {
        setUser(res);
        return res;
      })
      .then((res) => {
        getStories(res.id).then((x) => {
          getTasks(x).then((hmm) => {
            const filteredTasks = transformData(hmm);
            setData(filteredTasks);
          });
        });
      });
  }, []);

  // takes the input and creates a new task
  // placing it in the todo column in the propper story
  const handleClick_newTask = () => {
    setData([
      ...data,
      {
        tasks: [input],
        todos: [],
        doings: [],
        dones: [],
      },
    ]);
    setInput("");
  };

  // for display purposes, this function reorganizes the data into categories
  // so the browser can display the data via category columns
  const categorizedData = data
    .map((curr) => {
      return padData(curr);
    })
    .reduce(
      (acc, curr) => {
        let tempObj = { ...acc };
        tempObj.tasks = [...tempObj.tasks, curr.tasks];
        tempObj.todos = [...tempObj.todos, curr.todos];
        tempObj.doings = [...tempObj.doings, curr.doings];
        tempObj.dones = [...tempObj.dones, curr.dones];
        return tempObj;
      },
      { tasks: [], todos: [], doings: [], dones: [] }
    );

  return (
    <Box>
      <Typography>Triple D Scrum</Typography>
      <TextField label="Add task" onChange={(e) => setInput(e.target.value)} />
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
