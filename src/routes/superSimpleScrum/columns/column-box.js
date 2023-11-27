import { Box, Typography } from "@mui/material";

const Task = ({ data }) => {
  return data === "" ? (
    <Box height="20vh" margin={3} padding={1}>
      <Typography>{data}</Typography>
    </Box>
  ) : (
    <Box
      height="20vh"
      margin={3}
      padding={1}
      border="1px solid red"
      borderRadius={1}
      textAlign="left"
    >
      <Typography>{data}</Typography>
    </Box>
  );
};

const Story = ({ data }) => {
  return (
    <Box margin={1} border="1px solid green" borderRadius={1}>
      {data.map((task, i) => (
        <Task data={task} key={i} />
      ))}
    </Box>
  );
};

const ColumnBox = ({ header, data }) => {
  return (
    <Box width="20vw" textAlign="center" padding={1}>
      <Typography>{header}</Typography>
      <Box border="1px solid black" borderRadius={1}>
        <Story data={data} />
      </Box>
    </Box>
  );
};

export { ColumnBox };
