import { Reducer } from "redux";
import {errorState} from './reducerTypes'

const initialState:errorState = {
    showError: false
};

const error:Reducer<errorState> = (state = initialState, action) => {
    if (action.error) return { ...state, showError: true };
    const isFailed = action.type && action.type.includes('FAILED');
    return { ...state, showError: isFailed };
};

export { error };
