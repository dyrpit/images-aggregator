import { Action, ActionTypes } from './images.actions';

export interface ImagesState {
  catImages: string[];
  dogImages: string[];
}

const initialState: ImagesState = {
  catImages: [],
  dogImages: [],
};

function imagesReducer(state: ImagesState, action: Action) {
  switch (action.type) {
    case ActionTypes.SET_CAT_IMAGES:
      return { ...state, catImages: action.payload };
    case ActionTypes.SET_DOG_IMAGES:
      return { ...state, dogImages: action.payload };
    default:
      return state;
  }
}

export { initialState };
export default imagesReducer;
