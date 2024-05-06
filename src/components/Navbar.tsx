import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
function NavBar() {
  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
        <Typography variant='h6' color='inherit' component='div'>
          Images
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
