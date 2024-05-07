import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline, ThemeProvider } from '@mui/material';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavBar from './components/Navbar';

import { theme } from './theme/theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Box component='main'>
          <Container maxWidth='md'></Container>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
