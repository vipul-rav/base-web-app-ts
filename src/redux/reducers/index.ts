import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter, RouterState } from 'connected-react-router';
import { config } from './config';
import { loader } from './loader';
import { error } from './error';
import { post } from './post';
import { loaderState, configState, errorState, postState } from './reducerTypes';

const rootReducer = (history: History) => {
    return combineReducers({
        loader,
        config,
        error,
        post,
        router: connectRouter(history)
    });
};

export interface RootState {
    loader: loaderState;
    config: configState;
    error: errorState;
    post: postState;
    router: RouterState;
}
export { rootReducer };
