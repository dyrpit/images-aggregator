export const SET_CAT_IMAGES = 'SET_CAT_IMAGES';
export const SET_DOG_IMAGES = 'SET_DOG_IMAGES';
export const SET_CAT_LOADING = 'SET_CAT_LOADING';
export const SET_DOG_LOADING = 'SET_DOG_LOADING';
export const SET_CAT_LOAD_MORE = 'SET_CAT_LOAD_MORE';
export const SET_DOG_LOAD_MORE = 'SET_DOG_LOAD_MORE';

type ActionPayload = string[];

type SetCatImages = { type: typeof SET_CAT_IMAGES; payload: ActionPayload };
type SetDogImages = { type: typeof SET_DOG_IMAGES; payload: ActionPayload };
type SetCatLoading = { type: typeof SET_CAT_LOADING };
type SetDogLoading = { type: typeof SET_DOG_LOADING };
type SetCatLoadMore = { type: typeof SET_CAT_LOAD_MORE };
type SetDogLoadMore = { type: typeof SET_DOG_LOAD_MORE };

export type Action =
  | SetCatImages
  | SetDogImages
  | SetCatLoading
  | SetDogLoading
  | SetCatLoadMore
  | SetDogLoadMore;
