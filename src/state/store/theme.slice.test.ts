import { store } from './_store';
import { default as themeReducer } from './theme.slice';

describe('Theme state tests', () => {
  it('Should be initialized with user`s preference', () => {
    // Act
    const state = store.getState().rootPersistReducer.theme;

    // Assert
    expect(state.mode).toEqual('light');
  });

  it('Should change theme mode in state', () => {
    // Arrange
    const action = {
      type: "theme",
      payload: {
        mode: 'dark'
      }
    }

    // Act
    themeReducer({ mode: 'light' }, action);
    const state = store.getState().rootPersistReducer.theme;

    // Assert
    expect(state.mode).toEqual('dark')
  })
})
