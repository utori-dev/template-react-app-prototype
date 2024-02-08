import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AppState } from './types';

import theme from './theme.slice';
import dialog from './dialog.slice';

const SetTransform = createTransform(
  /**
   * transform state on its way to being serialized and persisted.
   */
  (inboundState: AppState) => ({ ...inboundState }),

  /**
   * transform state being rehydrated.
   */
  (outboundState: AppState) => ({ ...outboundState }),

  /**
   * define which reducers this transform gets called for.
   */
  { whitelist: ['theme'] }
);

/**
 * Any reducers added to this object will be saved to local or session storage.
 * as defined in the slice config file.
 */
const persisted = combineReducers({
  theme: persistReducer(
    {
      key: theme.name,
      storage,
      transforms: [SetTransform],
    },
    theme.reducer
  ),
});

const store = configureStore({
  reducer: {
    persisted,
    dialog: dialog.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export default store;
