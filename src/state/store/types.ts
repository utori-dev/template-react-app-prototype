import { Action, PayloadAction } from '@reduxjs/toolkit';

export type EqualityChecker<T> = (a: T, b: T) => boolean;

export enum DialogKey {
  CREDITS = 'credits',
}

export type AnyDialogData = Record<string, unknown>;

type BaseDialogState<
  K extends DialogKey,
  D extends AnyDialogData = AnyDialogData
> = { key: K; data: D };

// This could be modified to be a union type for stricter type validation.
export type DialogState = null | BaseDialogState<DialogKey.CREDITS>;

export type DialogStateOpen = Exclude<DialogState, null>;

export type DialogAction =
  | Action<'dialog/close'>
  | PayloadAction<DialogStateOpen, 'dialog/open'>;

export interface ThemeState {
  mode: 'light' | 'dark';
}

export type ThemeAction =
  | Action<'theme/mode/toggle'>
  | Action<'theme/mode/reset'>
  | PayloadAction<ThemeState['mode'], 'theme/mode/set'>;

export type AppState = {
  persistedReducers: {
    theme: ThemeState;
  };
  dialog: DialogState;
};

export type AppAction = ThemeAction | DialogAction;
