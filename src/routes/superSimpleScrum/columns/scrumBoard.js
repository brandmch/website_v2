import { Box, Typography } from "@mui/material";
const Task = ({ data }) => {
  return data === "" ? (
    <Box height={152} marginBottom={1.5} padding={1} margin={1.5} />
  ) : (
    <Box
      height={150}
      border="1px solid red"
      borderRadius={1}
      textAlign="left"
      padding={1}
      marginBottom={1.5}
      margin={1.5}
    >
      <Typography>{data}</Typography>
    </Box>
  );
};

const Story = ({ data }) => {
  console.log(data);
  return (
    <Box
      border="1px solid green"
      borderRadius={1}
      margin={1.5}
      marginBottom={5}
    >
      {data.map((task, i) => (
        <Task data={task} key={i} />
      ))}
    </Box>
  );
};

const ScrumBoard = ({ storyData }) => {
  return (
    <Box>
      {storyData.map((data, i) => (
        <Box key={i}>
          <Story data={data} />
        </Box>
      ))}
    </Box>
  );
};

export { ScrumBoard };
