import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import NavBar from './components/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
