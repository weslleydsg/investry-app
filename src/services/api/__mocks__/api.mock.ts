import ApiMock from 'axios-mock-adapter';
import api from '~/services/api';

export const mockedApi = new ApiMock(api);
