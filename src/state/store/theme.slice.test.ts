import store from './_store';
import { setThemeMode, resetThemeMode, toggleThemeMode } from './theme.slice';

describe('Theme state tests', () => {
  it('Should be initialized with user`s preference: dark mode', () => {
    // Act
    const state = store.getState().persistedReducers.theme;

    // Assert
    expect(state.mode).toEqual('dark');
  });

  /**
   * @TODO need to make these tests pass - not sure how to initialize app with light mode
   */
  // it('Should be initialized with user`s preference: light mode ', () => {
  //   // // Act
  //   const state = store.getState().persistedReducers.theme;

  //   // Assert
  //   expect(state.mode).toEqual('light');
  // });

  it('Should change theme mode in state', () => {
    // Act
    store.dispatch(setThemeMode('light'));
    const state = store.getState().persistedReducers.theme;

    // Assert
    expect(state.mode).toEqual('light');
  });

  it('Should reset theme to window theme mode to dark', () => {
    // Arrange
    store.dispatch(setThemeMode('light'));

    // Act
    store.dispatch(resetThemeMode());
    const state = store.getState().persistedReducers.theme;

    // Assert
    expect(state.mode).toEqual('dark');
  });

  /**
 * @TODO need to make these tests pass - not sure how to initialize app with light mode
 */
  // it('Should reset theme to window theme mode to light', () => {
  //   // Arrange
  //   store.dispatch(setThemeMode('dark'));

  //   // Act
  //   store.dispatch(resetThemeMode());
  //   const state = store.getState().persistedReducers.theme;

  //   // Assert
  //   expect(state.mode).toEqual('light');
  // });

  it('Should toggle theme mode to dark', () => {
    // Arrange
    store.dispatch(setThemeMode('light'));

    // Act
    store.dispatch(toggleThemeMode());
    const state = store.getState().persistedReducers.theme;

    // Assert
    expect(state.mode).toEqual('dark');
  });
  /**
   * @TODO need to make these tests pass - not sure how to initialize app with light mode
   */
  // it('Should toggle theme mode to light', () => {
  //   // Arrange
  //   store.dispatch(setThemeMode('dark'));

  //   // Act
  //   store.dispatch(toggleThemeMode());
  //   const state = store.getState().persistedReducers.theme;

  //   // Assert
  //   expect(state.mode).toEqual('light');
  // });
});
