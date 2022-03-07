import { useTranslation } from 'react-i18next';

jest.mock('react-i18next');

const mockedT = jest.fn().mockImplementation((key: string | string[]) => key);
const mockedUseTranslation = useTranslation as jest.Mock;
mockedUseTranslation.mockReturnValue({ t: mockedT });

export const useTranslationMock = {
  self: mockedUseTranslation,
  t: mockedT,
};
