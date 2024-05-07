import { useQuery } from '@tanstack/react-query';
import { getDogImages } from '../api/services/api.service';

const QUERY_KEY = 'dog_images';

function useDogImages() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: getDogImages,
  });

  return {
    images: data,
    error,
    isLoading,
    isError,
  };
}

export { useDogImages };
