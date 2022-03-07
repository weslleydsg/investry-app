import React from 'react';
import { fireEvent, render } from 'test-utils';
import { useTranslationMock } from '~/__mocks__/react-i18next.mock';
import ErrorScreen from '.';

describe('ErrorScreen', () => {
  it('shows network error', () => {
    const { toJSON } = render(
      <ErrorScreen networkError onRetryPress={jest.fn()} />,
    );
    const tree = toJSON();
    expect(tree).toMatchSnapshot();
    expect(useTranslationMock.self).toHaveBeenCalledWith();
    expect(useTranslationMock.t).toHaveBeenCalledWith('error.network');
    expect(useTranslationMock.t).toHaveBeenCalledWith('button.retry', {
      ns: 'common',
    });
  });

  it('shows unexpected error', () => {
    const { toJSON } = render(
      <ErrorScreen networkError={false} onRetryPress={jest.fn()} />,
    );
    const tree = toJSON();
    expect(tree).toMatchSnapshot();
    expect(useTranslationMock.self).toHaveBeenCalledWith();
    expect(useTranslationMock.t).toHaveBeenCalledWith('error.unexpected');
    expect(useTranslationMock.t).toHaveBeenCalledWith('button.retry', {
      ns: 'common',
    });
  });

  it('calls onRetryPress prop on retry button press', () => {
    const mockedOnRetryPress = jest.fn();
    const { getByText } = render(
      <ErrorScreen networkError={false} onRetryPress={mockedOnRetryPress} />,
    );
    const retryButton = getByText('button.retry');
    fireEvent.press(retryButton);
    expect(mockedOnRetryPress).toHaveBeenCalledWith();
  });
});
