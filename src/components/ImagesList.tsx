import { useCallback, useContext } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import ImageList from '@mui/material/ImageList';
import Typography from '@mui/material/Typography';

import Image from './Image';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useImages } from '../hooks/useImages';

import { ImagesContext } from '../context/images.context';

import { theme } from '../theme/theme';

function ImagesList() {
  const { state } = useContext(ImagesContext);
  const { loadMore } = useImages();

  const matchesSmall = useMediaQuery(theme.breakpoints.up('sm'));
  const matchesMedium = useMediaQuery(theme.breakpoints.up('md'));

  const getColumns = useCallback(() => {
    if (matchesMedium) return 3;
    if (matchesSmall) return 2;
    return 1;
  }, [matchesMedium, matchesSmall]);

  const isLoading = state.isCatLoadingMore || state.isDogLoadingMore;

  if (state.isCatLoading && state.isDogLoading) return <h1>Loading...</h1>;

  return (
    <>
      <Typography variant='h4' textAlign={'center'}>
        Images list
      </Typography>
      <ImageList cols={getColumns()} gap={8}>
        {[...state.catImages, ...state.dogImages].map((img, index) => (
          <Image key={`${img}-${index}`} img={img} />
        ))}
      </ImageList>
      {isLoading && (
        <Box sx={{ margin: '20px auto', width: 40 }}>
          <CircularProgress color='secondary' />
        </Box>
      )}
      <Button
        variant='contained'
        size='large'
        color='secondary'
        sx={{ margin: '0 auto', display: 'block' }}
        onClick={loadMore}
        disabled={isLoading}
      >
        Load more
      </Button>
    </>
  );
}

export default ImagesList;
