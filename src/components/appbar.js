import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import useWindowSize from "../utils/useWindowSize";

const pages = [
  ["Blog", "/blog"],
  ["LinkedIn", "https://www.linkedin.com/in/mchugh-brandon/"],
  ["GitHub", "https://github.com/brandmch"],
  // ["Contact Me", "/contactme"],
];

const AppBarCustom = ({ style = { color: "header" } }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { width } = useWindowSize();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color={style.color}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            paddingLeft={width > 900 ? 8 : 0}
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={
              width > 900
                ? {
                    mr: 6,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "white",
                    textDecoration: "none",
                  }
                : {
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "white",
                    textDecoration: "none",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }
            }
          >
            BRANDON McHUGH
          </Typography>

          {width > 900 ? (
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              {/* <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              ></IconButton> */}
            </Box>
          ) : (
            ""
          )}
          {width > 900 ? (
            <Box
              paddingRight={8}
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "flex-end" },
              }}
            >
              {pages.map(([title, url]) => (
                <Button
                  key={url}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = url;
                  }}
                  sx={{ my: 2, mx: 2, color: "white", display: "block" }}
                >
                  {title}
                </Button>
              ))}
            </Box>
          ) : (
            ""
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarCustom;
