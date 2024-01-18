// Actions are bound to the store to avoid Redux-specific concerns outside the module.

import store from './_store';
import { DialogState, ThemeState } from './types';
import { setThemeMode, resetThemeMode, toggleThemeMode } from './theme.slice';
import { dialogOpen, dialogClose } from './dialog.slice';

export function closeDialog(): void {
  store.dispatch(dialogClose({ type: 'dialog/close' }));
}

export function openDialog(payload: Exclude<DialogState, null>): void {
  store.dispatch(dialogOpen({ type: 'dialog/open', payload: payload }));
}

export function toggleThemeModeAction(): void {
  store.dispatch(toggleThemeMode());
}

export function resetThemeModeAction(): void {
  store.dispatch(resetThemeMode());
}

export function setThemeModeAction(mode: ThemeState['mode']): void {
  store.dispatch(setThemeMode(mode));
}
