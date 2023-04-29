import { useState, useEffect } from "react";
import { parseDate } from "../../../utils/parseDate";
import {
  Box,
  Button,
  Typography,
  Divider,
  Paper,
  IconButton,
  TextField,
} from "@mui/material";
import randomKeyGenerator from "../../../utils/randomKeyGenerator";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { deletePost, editPost, sparsePost } from "../hasura/utils";

export const Posts = ({ posts, user, setLoadPosts }) => {
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
        <Box>
          <IconButton onClick={() => setEdit(false)}>
            <CloseIcon />
          </IconButton>
          <IconButton onClick={startEditPost}>
            <CheckIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const Post = ({ props }) => {
    const [edit, setEdit] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const { id, text, time, Posts_User, mine } = props;
    return (
      <Paper
        elevation={5}
        sx={{ padding: 3, borderRadius: 3, marginBottom: 3 }}
        key={id}
      >
        <Typography>{Posts_User.name}</Typography>
        <Typography>{parseDate(time)}</Typography>
        {!edit ? (
          <Box>
            <Paragraphs text={text} />
            {mine && (
              <Box>
                {!confirmDelete ? (
                  <Box>
                    <IconButton id="EDIT" onClick={() => setEdit(!edit)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      id="DELETE"
                      onClick={() => setConfirmDelete(true)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ) : (
                  <Box>
                    <Box display="flex" alignItems="center">
                      <Typography>You sure?</Typography>
                      <IconButton onClick={() => setConfirmDelete(false)}>
                        <CloseIcon />
                      </IconButton>
                      <IconButton
                        onClick={() =>
                          deletePost(id).then((x) => setLoadPosts(true))
                        }
                      >
                        <CheckIcon />
                      </IconButton>
                    </Box>
                  </Box>
                )}
              </Box>
            )}
          </Box>
        ) : (
          <EditPost setEdit={setEdit} text={text} id={id} />
        )}
        <Divider
          sx={{ backgroundColor: "black", margin: "5px 400px 5px 5px" }}
        />
        <Typography>-{Posts_User.username}</Typography>
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
