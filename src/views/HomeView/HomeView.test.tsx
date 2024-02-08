import * as React from 'react';
import * as renderer from 'react-test-renderer';
import HomeView from './HomeView';

describe('HomeView', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<HomeView />).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
