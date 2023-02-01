import React from "react";
import { Box, Typography } from "@mui/material";

const List = ({ data }) => {
  return data.map(([title, icon, url]) => {
    return (
      <Typography gutterBottom display="flex" alignItems="start" key={title}>
        <Box marginRight={1}>{icon}</Box>
        {url ? <a href={url}>{title}</a> : title}
      </Typography>
    );
  });
};

export default List;
