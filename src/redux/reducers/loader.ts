import { Reducer } from 'redux';
import { loaderState } from './reducerTypes';

const initialState: loaderState = {
    loading: true
};

const loader: Reducer<loaderState> = (state = initialState, action) => {
    const { meta } = action;
    if (meta && typeof meta.loading === 'boolean') {
        return { ...state, loading: meta.loading };
    }
    return state;
};

export { loader };
