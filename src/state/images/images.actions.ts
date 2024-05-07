export const ActionTypes = {
  SET_CAT_IMAGES: 'SET_CAT_IMAGES',
  SET_DOG_IMAGES: 'SET_CAT_IMAGES',
};

type ActionTypesType = keyof typeof ActionTypes;

type ActionPayload = string[];

export interface Action {
  type: ActionTypesType;
  payload: ActionPayload;
}
