import { useQuery } from '@tanstack/react-query';
import { getCatImages } from '../api/services/api.service';

const QUERY_KEY = 'cat_images';

function useCatImages() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: getCatImages,
  });

  return {
    images: data,
    error,
    isLoading,
    isError,
  };
}

export { useCatImages };
