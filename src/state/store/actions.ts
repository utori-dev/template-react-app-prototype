// Actions are bound to the store to avoid Redux-specific concerns outside the module.
import store from './store';
import theme, { ThemeState } from './theme.slice';
import dialog, { DialogKey, DialogStateOpen } from './dialog.slice';

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
  store.dispatch(theme.actions.toggleMode());
}

export function resetThemeModeAction(): void {
  store.dispatch(theme.actions.resetMode());
}

export function setThemeModeAction(mode: ThemeState['mode']): void {
  store.dispatch(theme.actions.setMode(mode));
}
