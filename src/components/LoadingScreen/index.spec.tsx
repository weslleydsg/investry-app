import React from 'react';
import { render } from 'test-utils';
import LoadingScreen from '.';

describe('LoadingScreen', () => {
  it('renders correctly', () => {
    const { toJSON, queryByTestId } = render(<LoadingScreen />);
    const tree = toJSON();
    expect(tree).toMatchSnapshot();
    expect(queryByTestId('LoadingScreen.Screen')).not.toBeNull();
  });
});
