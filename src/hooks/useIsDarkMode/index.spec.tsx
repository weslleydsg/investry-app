import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { View } from 'react-native';
import useIsDarkMode from '.';

const mockedUseColorScheme = jest.fn();
jest.mock('react-native', () => {
  return Object.setPrototypeOf(
    {
      useColorScheme: jest
        .fn()
        .mockImplementation(
          (value: string) => mockedUseColorScheme(value) as string,
        ),
    },
    jest.requireActual('react-native'),
  ) as unknown;
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <View>{children}</View>
);

describe('useIsDarkMode', () => {
  it('returns true', () => {
    mockedUseColorScheme.mockReturnValue('light');
    const { result, rerender } = renderHook(useIsDarkMode, {
      wrapper,
    });
    expect(result.current).toBe(false);
    mockedUseColorScheme.mockReturnValue('dark');
    rerender();
    expect(result.current).toBe(true);
  });
});
