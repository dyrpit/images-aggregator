import { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { getCatImages } from '../api/services/api.service';

import { ImagesContext } from '../context/images.context';

import { SET_CAT_IMAGES, SET_CAT_LOADING, SET_CAT_LOAD_MORE } from '../state/images/images.actions';

const QUERY_KEY = 'cat_images';

function useCatImages() {
  const { data, error, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: getCatImages,
  });

  const { dispatch } = useContext(ImagesContext);

  useEffect(() => {
    if (data) {
      dispatch({ type: SET_CAT_IMAGES, payload: data });
    }
  }, [isLoading, data, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error('Failed to fetch cat images');
    }
  }, [error]);

  useEffect(() => {
    if (isLoading) {
      dispatch({ type: SET_CAT_LOADING });
    }
  }, [isLoading, dispatch]);

  useEffect(() => {
    if (isRefetching) {
      dispatch({ type: SET_CAT_LOAD_MORE });
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

export { useCatImages };
