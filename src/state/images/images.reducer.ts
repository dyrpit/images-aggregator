import {
  Action,
  SET_CAT_IMAGES,
  SET_CAT_LOADING,
  SET_CAT_LOAD_MORE,
  SET_DOG_IMAGES,
  SET_DOG_LOADING,
  SET_DOG_LOAD_MORE,
} from './images.actions';

export interface ImagesState {
  catImages: string[];
  isCatLoading: boolean;
  isCatLoadingMore: boolean;
  dogImages: string[];
  isDogLoading: boolean;
  isDogLoadingMore: boolean;
}

const initialState: ImagesState = {
  catImages: [],
  isCatLoading: true,
  isCatLoadingMore: false,
  dogImages: [],
  isDogLoading: true,
  isDogLoadingMore: false,
};

function imagesReducer(state: ImagesState, action: Action) {
  switch (action.type) {
    case SET_CAT_IMAGES:
      return {
        ...state,
        catImages: [...state.catImages, ...action.payload],
        isCatLoading: false,
        isCatLoadingMore: false,
      };
    case SET_DOG_IMAGES:
      return {
        ...state,
        dogImages: [...state.dogImages, ...action.payload],
        isDogLoading: false,
        isDogLoadingMore: false,
      };
    case SET_CAT_LOADING:
      return { ...state, isCatLoading: true };
    case SET_DOG_LOADING:
      return { ...state, isDogLoading: true };
    case SET_CAT_LOAD_MORE:
      return { ...state, isCatLoadingMore: true };
    case SET_DOG_LOAD_MORE:
      return { ...state, isDogLoadingMore: true };
    default:
      return state;
  }
}

export { initialState };
export default imagesReducer;
