import * as React from 'react';
import * as renderer from 'react-test-renderer';
import UtoriLogoIcon from './UtoriLogoIcon';

describe('UtoriLogoIcon', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<UtoriLogoIcon />).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
