import { useCatImages } from './useCatImages';
import { useDogImages } from './useDogImages';

function useImages() {
  const { refetch: loadMoreCatImages } = useCatImages();
  const { refetch: loadMoreDogImages } = useDogImages();

  function loadMore() {
    loadMoreCatImages();
    loadMoreDogImages();
  }

  return { loadMore };
}

export { useImages };
