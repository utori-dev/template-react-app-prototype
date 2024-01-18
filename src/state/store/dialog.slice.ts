import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DialogState, DialogAction } from './types';

const initialState: DialogState = null;

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState: initialState,
  reducers: {
    dialogOpen: (state, action: PayloadAction<DialogAction>) => {
    },
    dialogClose: (state, action: PayloadAction<DialogAction>) => {
    }
  },
});

export const { dialogOpen, dialogClose } = dialogSlice.actions;

export default dialogSlice.reducer;