import { createContext, useReducer, ReactNode, Dispatch } from 'react';

import reducer, { ImagesState, initialState } from '../state/images/images.reducer';
import { Action } from '../state/images/images.actions';

interface Context {
  state: ImagesState;
  dispatch: Dispatch<Action>;
}

const initialContext = {
  state: initialState,
  dispatch: () => null,
};

export const ImagesContext = createContext<Context>(initialContext);

type Props = {
  children: ReactNode;
};

function ImagesProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ImagesContext.Provider value={{ state, dispatch }}>{children}</ImagesContext.Provider>;
}

export default ImagesProvider;
