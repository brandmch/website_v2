import { Button } from "@mui/material";

export const CommonButton = ({ title, callback }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{ marginTop: 2, backgroundColor: "button" }}
      onClick={callback}
    >
      {title}
    </Button>
  );
};
