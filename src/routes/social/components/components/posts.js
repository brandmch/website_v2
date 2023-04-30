import { useState, useEffect } from "react";
import { parseDate } from "../../../../utils/parseDate";
import {
  Box,
  Button,
  Typography,
  Divider,
  Paper,
  IconButton,
  TextField,
} from "@mui/material";
import randomKeyGenerator from "../../../../utils/randomKeyGenerator";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { deletePost, editPost, sparsePost } from "../../hasura/utils";
import { randomColor } from "../../../../utils/randomColor";

export const Posts = ({ posts, user, setLoadPosts }) => {
  const onHover = () => {
    return {
      "&:hover": {
        color: `${randomColor()}`,
      },
    };
  };

  const IconBox = ({ icons }) => {
    let [[callback1, icon1], [callback2, icon2]] = icons;
    return (
      <Box marginLeft={-1}>
        <IconButton onClick={callback1} sx={onHover}>
          {icon1}
        </IconButton>
        <IconButton onClick={callback2} sx={onHover}>
          {icon2}
        </IconButton>
      </Box>
    );
  };

  const Paragraphs = ({ text }) => {
    return text.map((c) => (
      <Typography key={randomKeyGenerator()} fontSize={20}>
        {c === "" ? "\b" : c}
      </Typography>
    ));
  };

  function checkIfPostIsUsers(x) {
    return x.map((c) => {
      let temp = { ...c };
      if (user && user.id === c.Posts_User.id) {
        temp.mine = true;
        return temp;
      } else {
        temp.mine = false;
        return temp;
      }
    });
  }

  const EditPost = ({ setEdit, text, id }) => {
    const [input, setInput] = useState(text.join("\n"));

    const startEditPost = () => {
      editPost(sparsePost(input), id).then((x) => {
        setLoadPosts(true);
      });
    };

    return (
      <Box>
        <TextField
          label="EDIT"
          variant="filled"
          value={input}
          sx={{ backgroundColor: "white" }}
          multiline
          fullWidth
          onChange={(e) => setInput(e.target.value)}
        />
        <IconBox
          icons={[
            [() => setEdit(false), <CloseIcon fontSize="small" />],
            [startEditPost, <CheckIcon fontSize="small" />],
          ]}
        />
      </Box>
    );
  };

  const Post = ({ props }) => {
    const [edit, setEdit] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const { id, text, time, Posts_User, mine } = props;

    return (
      <Paper
        elevation={2}
        sx={{ padding: 3, borderRadius: 3, marginBottom: 3 }}
        key={id}
      >
        <Typography fontSize={16} marginBottom={1}>
          {Posts_User.name}
        </Typography>
        {!edit ? (
          <Box marginY={1}>
            <Paragraphs text={text} />
          </Box>
        ) : (
          <EditPost setEdit={setEdit} text={text} id={id} />
        )}
        <Divider sx={{ backgroundColor: "#ADADAD" }} />
        <Typography fontSize={12}>{parseDate(time)}</Typography>
        {mine && (
          <Box>
            {!confirmDelete ? (
              <IconBox
                icons={[
                  [() => setEdit(!edit), <EditIcon fontSize="small" />],
                  [
                    () => setConfirmDelete(true),
                    <DeleteIcon fontSize="small" />,
                  ],
                ]}
              />
            ) : (
              <Box display="flex" alignItems="center">
                <Typography>You sure?</Typography>
                <IconBox
                  icons={[
                    [
                      () => setConfirmDelete(false),
                      <CloseIcon fontSize="small" />,
                    ],
                    [
                      () => deletePost(id).then((x) => setLoadPosts(true)),
                      <CheckIcon fontSize="small" />,
                    ],
                  ]}
                />
              </Box>
            )}
          </Box>
        )}
      </Paper>
    );
  };

  if (posts) {
    return (
      <Box>
        {checkIfPostIsUsers(posts).map((x) => {
          return <Post props={x} key={randomKeyGenerator()} />;
        })}
      </Box>
    );
  }
};
