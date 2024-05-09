import { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { getDogImages } from '../api/services/api.service';

import { ImagesContext } from '../context/images.context';

import { SET_DOG_IMAGES, SET_DOG_LOADING, SET_DOG_LOAD_MORE } from '../state/images/images.actions';

const QUERY_KEY = 'dog_images';

function useDogImages() {
  const { data, error, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: getDogImages,
  });

  const { dispatch } = useContext(ImagesContext);

  useEffect(() => {
    if (data) {
      dispatch({ type: SET_DOG_IMAGES, payload: data });
    }
  }, [isLoading, data, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error('Failed to fetch cat images');
    }
  }, [error]);

  useEffect(() => {
    if (isLoading) {
      dispatch({ type: SET_DOG_LOADING });
    }
  }, [isLoading, dispatch]);

  useEffect(() => {
    if (isRefetching) {
      dispatch({ type: SET_DOG_LOAD_MORE });
    }
  }, [isRefetching, dispatch]);

  return {
    images: data,
    error,
    isLoading,
    isRefetching,
    isError,
    refetch,
  };
}

export { useDogImages };
