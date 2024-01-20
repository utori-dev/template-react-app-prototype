import * as React from 'react';
import * as renderer from 'react-test-renderer';
import FormControl from './FormControl';

describe('FormControl', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<FormControl>{}</FormControl>).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
