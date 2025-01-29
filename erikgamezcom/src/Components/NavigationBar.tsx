import icon from '../assets/favicon/android-chrome-384x384.png'
import { AppBar, Avatar, Box, Button, IconButton, Toolbar } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="fixed">
        <Toolbar>
          <a href="https://erikgamez.com" target="_blank">
            <Avatar sx={{ width: 100, height: 100 }} src={icon}></Avatar>
          </a>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          
            {/* <Button color="inherit"> About Me </Button> */}
            {/* <Button color="inherit"> Resume </Button>
            <Button color="inherit"> Music </Button> 
          */}

        </Toolbar>
      </AppBar>
    </Box>
  );
}