import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { isEqual } from 'lodash';
import { AppState, AppAction, ThemeState, DialogState } from './types';

import { default as themeReducer } from './theme.slice'

const SetTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState: AppState, key) => {
    return { ...inboundState };
  },

  // transform state being rehydrated
  (outboundState: AppState, key) => {
    return { ...outboundState };
  },

  // define which reducers this transform gets called for.
  { whitelist: ['theme'] }
);

const themeSliceConfig = {
  key: 'theme',
  storage,
  transforms: [SetTransform],
};

export function dialogReducer(
  state: DialogState = null,
  action: AppAction
): DialogState {
  switch (action.type) {
    case 'dialog/close':
      return null;
    case 'dialog/open':
      if (isEqual(state, action.payload)) return state;
      return action.payload;
    default:
      return state;
  }
}

const rootPersistReducer = combineReducers({
  theme: persistReducer(themeSliceConfig, themeReducer),
});

export const store = configureStore({
  reducer: {
    rootPersistReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store)

