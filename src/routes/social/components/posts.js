import { parseDate } from "../../../utils/parseDate";
import {
  Box,
  Button,
  Typography,
  Divider,
  Paper,
  IconButton,
} from "@mui/material";
import randomKeyGenerator from "../../../utils/randomKeyGenerator";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePost } from "../hasura/utils";

export const Posts = ({ posts, user, setLoadPosts }) => {
  const Paragraphs = ({ text }) => {
    return text.map((c) => (
      <Typography key={randomKeyGenerator()} fontSize={20}>
        {c === "" ? "\b" : c}
      </Typography>
    ));
  };

  function check(x) {
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

  const handleClick = (button, id) => {
    console.log(button, id);
    if (button === "DELETE") {
      deletePost(id).then((x) => setLoadPosts(true));
    } else if (button === "EDIT") {
    }
  };

  const Post = ({ props }) => {
    const { id, text, time, Posts_User, mine } = props;
    return (
      <Paper
        elevation={5}
        sx={{ padding: 3, borderRadius: 3, marginBottom: 3 }}
        key={id}
      >
        <Typography>{Posts_User.name}</Typography>
        <Typography>{parseDate(time)}</Typography>
        <Paragraphs text={text} />
        <Divider
          sx={{ backgroundColor: "black", margin: "5px 400px 5px 5px" }}
        />
        <Typography>-{Posts_User.username}</Typography>
        {mine && (
          <Box>
            <IconButton id="EDIT" onClick={() => handleClick("EDIT", id)}>
              <EditIcon />
            </IconButton>
            <IconButton id="DELETE" onClick={() => handleClick("DELETE", id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      </Paper>
    );
  };

  if (posts) {
    return check(posts).map((x) => {
      return <Post props={x} key={randomKeyGenerator()} />;
    });
  }
};
