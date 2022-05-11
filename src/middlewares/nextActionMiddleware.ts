import { Action } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { RootAppState } from '../redux/store';

const nextActionMiddleware: Middleware<{}, RootAppState> = (store) => (next) => (action) => {
    if (!action.meta || !action.meta.nextAction) {
        return next(action);
    }
    const result = next(action);

    action.meta.nextAction.map((act: Action) => store.dispatch(act));
    return result;
};

export { nextActionMiddleware };
