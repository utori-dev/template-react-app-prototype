import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isEqual } from 'lodash';
import {
  AnyDialogData,
  DialogKey,
  DialogState,
  DialogStateOpen,
} from './types';

const initialState: DialogState = null;

type DialogReducers = {
  open(state: DialogState, action: PayloadAction<DialogStateOpen>): DialogState;
  close(state: DialogState, action: Action): DialogState;
};

function isOpen(state: DialogState, key?: DialogKey): state is DialogStateOpen {
  if (!state) return false;
  if (key && key !== state.key) return false;
  return true;
}

function getData<K extends DialogKey, D extends AnyDialogData = AnyDialogData>(
  state: DialogState,
  key: K
): D | undefined {
  if (isOpen(state, key)) state.data as D;
  return undefined;
}

const dialog = createSlice<
  DialogState,
  DialogReducers,
  'dialog',
  { isOpen: typeof isOpen; getData: typeof getData }
>({
  name: 'dialog',
  initialState,
  reducers: {
    open: (
      state: DialogState,
      { payload }: PayloadAction<DialogStateOpen>
    ): DialogState => (isEqual(state, payload) ? state : payload),
    close: () => null,
  },
  selectors: { getData, isOpen },
});

export default dialog;
