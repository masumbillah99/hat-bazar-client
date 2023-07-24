import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logo from "../../../assets/logo.png";
import { createTheme, ThemeProvider } from "@mui/material";
import { NavLink } from "react-router-dom";

// const pages = ["Home", "Colleges", "Admission", "My College"];
const settings = ["Profile", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  const theme = createTheme({
    typography: {
      fontFamily: ["Open Sans"].join(","),
    },
  });

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-btn" : "idle-btn")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/colleges"
          className={({ isActive }) => (isActive ? "active-btn" : "idle-btn")}
        >
          Colleges
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admission"
          className={({ isActive }) => (isActive ? "active-btn" : "idle-btn")}
        >
          Admission
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCollege"
          className={({ isActive }) => (isActive ? "active-btn" : "idle-btn")}
        >
          My College
        </NavLink>
      </li>
    </>
  );

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#1E202D", padding: "11px 0" }}
    >
      <Container maxWidth="xl">
        <ThemeProvider theme={theme}>
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}

            {/* desktop screen */}
            <Avatar
              alt=""
              src={logo}
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                cursor: "pointer",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              College Book
            </Typography>

            {/* small screen */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <ul className="px-6 py-3 flex flex-col gap-4 font-bold">
                  {navItems}
                </ul>
                {/* {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="right">{page}</Typography>
                  </MenuItem>
                ))} */}
              </Menu>
            </Box>

            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Avatar
              alt=""
              src={logo}
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                cursor: "pointer",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              College Book
            </Typography>

            {/* desktop screen */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                gap: "17px",
                mr: "29px",
                listStyle: "none",
              }}
            >
              {navItems}
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))} */}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="" src={AccountCircle} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </ThemeProvider>
      </Container>
    </AppBar>
  );
}
export default Navbar;
