import store from './_store';
import {
  closeDialog,
  openDialog,
  resetThemeModeAction,
  setThemeModeAction,
  toggleThemeModeAction,
} from './actions';

jest.mock('./_store.ts', () => ({
  __esModule: true,
  default: {
    dispatch: jest.fn(),
  },
}));

describe('data/store/actions', () => {
  afterEach(jest.resetAllMocks);

  describe('closeDialog', () => {
    it('should dispatch action to close dialog', () => {
      // Act
      closeDialog();

      // Assert
      expect(store.dispatch).toHaveBeenCalledWith({ type: 'dialog/dialogClose' });
    });
  });

  describe('openDialog', () => {
    it('should dispatch action to open dialog', () => {
      // Arrange
      const dialog = { key: 'foo', data: { foo: 'test', bar: 123 } };

      // Act
      openDialog(dialog);

      // Assert
      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'dialog/dialogOpen',
        payload: dialog,
      });
    });
  });

  describe('toggleThemeMode', () => {
    it('should dispatch action to toggle light/dark mode', () => {
      // Act
      toggleThemeModeAction();

      // Assert
      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'theme/toggleThemeMode',
        payload: undefined,
      });
    });
  });

  describe('resetThemeMode', () => {
    it('should dispatch action to reset light/dark mode to user preference', () => {
      // Act
      resetThemeModeAction();

      // Assert
      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'theme/resetThemeMode',
        payload: undefined,
      });
    });
  });

  describe('setThemeMode', () => {
    it('should dispatch action to set light/dark mode to provided value', () => {
      // Act
      setThemeModeAction('light');

      // Assert
      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'theme/setThemeMode',
        payload: 'light',
      });
    });
  });
});
