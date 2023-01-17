import { LogoutOutlined, MenuBookOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
     ml:{sm: `${drawerWidth}px`} }}
    >
      <Toolbar>
        <IconButton
            color='inherit'
            edge="start"
            sx={{mr:2, display:{sm:'none'}}}
            >
          <MenuBookOutlined />
        </IconButton>
        <Grid container direcction ='row' justifyContent='space-between'>
            <Typography variant="h6" noWrap component='div'>Journall App</Typography>
            <IconButton color='error'>
                <LogoutOutlined/>

            </IconButton>

        </Grid>
      </Toolbar>
    </AppBar>
  );
};
