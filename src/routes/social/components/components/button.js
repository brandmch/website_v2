import { Button } from "@mui/material";

export const CommonButton = ({ title, callback }) => {
  return (
    <Button
      variant="outlined"
      fullWidth
      sx={{ marginTop: 2, color: "black", border: "solid 1px black" }}
      onClick={callback}
    >
      {title}
    </Button>
  );
};
