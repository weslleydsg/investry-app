const mockedNavigate = jest.fn();
export const mockedUseRoute = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockedNavigate,
  }),
  useRoute: mockedUseRoute,
}));

export const useNavigationMock = {
  navigate: mockedNavigate,
};
