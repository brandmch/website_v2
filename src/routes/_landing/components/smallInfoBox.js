import React from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";
import List from "./list";

const SmallInfoBox = ({ title, data, marginTop = 4 }) => {
  return (
    <Box marginBottom={4} marginTop={marginTop}>
      <Paper elevation={4}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center" gutterBottom>
            {title}
          </Typography>
          <hr />
          <List data={data} />
        </Box>
      </Paper>
    </Box>
  );
};

export default SmallInfoBox;
