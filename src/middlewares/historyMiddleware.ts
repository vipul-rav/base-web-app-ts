import { push } from 'connected-react-router';
import { Middleware } from 'redux';
import { RootAppState } from '../redux/store';

const historyMiddleware: Middleware<{}, RootAppState> = (store) => (next) => (action) => {
    const result = next(action);
    if (action.payload.path) {
        store.dispatch(push(action.payload.path));
    }
    return result;
};

export { historyMiddleware };
