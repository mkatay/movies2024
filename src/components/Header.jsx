import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MovieIcon from '@mui/icons-material/Movie';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { deepPurple } from '@mui/material/colors';

const bgcolor= deepPurple[900];

const navItems=[
    {path:'/',name:"Trendings"},
    {path:'/movies',name:"Movies"},
    {path:'/series',name:"TV Series"},
    {path:'/search',name:"Search"},
]

export const Header=()=> {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
    <AppBar position="static" sx={{backgroundColor:bgcolor}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MovieIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          {/*mobil nézet*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {navItems.map((item) => (
                <NavLink key={item.name} to={item.path} className={({ isActive }) => (isActive ? "active" : "")}>
                    <MenuItem  onClick={handleCloseNavMenu}>
                        <Typography sx={{ textAlign: 'center' }}>{item.name}</Typography>
                    </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <MovieIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

       {/*laptop nézet*/}  
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
                <NavLink key={item.name} to={item.path} className={({ isActive }) => (isActive ? "active" : "inactiv")}>
                    <Button  onClick={handleCloseNavMenu} sx={{ my: 2, color: 'inherit', display: 'block' }} >{/*inherit- a szülő elem tulajdonságát fogja követni */}
                        {item.name}
                    </Button>
                </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Outlet/>
    </>
  );
}

