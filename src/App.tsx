import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavBar from './components/Navbar';
import ImagesList from './components/ImagesList';

import ImagesProvider from './context/images.context';

import { theme } from './theme/theme';

import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ImagesProvider>
          <CssBaseline />
          <NavBar />
          <Box component='main'>
            <Container maxWidth='md' sx={{ paddingY: 3 }}>
              <ImagesList />
            </Container>
          </Box>
          <ToastContainer />
        </ImagesProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
