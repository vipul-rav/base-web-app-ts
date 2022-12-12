import { RootAppState } from '../redux/store';

export const apiUrl = (state: RootAppState) => state.config.envUrl && state.config.envUrl.apiUrl;
