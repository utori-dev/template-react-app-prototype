import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeState } from './types';

const isDarkMode = () =>
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialThemeState: ThemeState = {
  mode: isDarkMode() ? 'dark' : 'light',
};


const initialState = { ...initialThemeState };
/**
 * function to create an initial state and the asscociated reducers
 */
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeThemeMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
    }
  },
});

export const { changeThemeMode } = themeSlice.actions;

export default themeSlice.reducer;