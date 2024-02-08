// Actions are bound to the store to avoid Redux-specific concerns outside the module.
import store from './_store';
import { DialogKey, DialogStateOpen, ThemeState } from './types';
import { setThemeMode, resetThemeMode, toggleThemeMode } from './theme.slice';
import dialog from './dialog.slice';

export function closeDialogAction(): void {
  store.dispatch(dialog.actions.close());
}

export function openDialogAction(payload: DialogStateOpen): void {
  store.dispatch(dialog.actions.open(payload));
}

export function openCreditsDialog(): void {
  openDialogAction({ key: DialogKey.CREDITS, data: {} });
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
