import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import { apiUrlMiddleware } from '../../middlewares/apiUrlMiddleware';
import { historyMiddleware } from '../../middlewares/historyMiddleware';
import { nextActionMiddleware } from '../../middlewares/nextActionMiddleware';
import { rootReducer, RootState } from '../../redux/reducers';
import { history } from '../../routes';

const allMiddleware = [apiUrlMiddleware, historyMiddleware, nextActionMiddleware, routerMiddleware(history)];

export const store = configureStore({
    reducer: rootReducer(history),
    middleware: allMiddleware as any,
    devTools: { name: 'Web App' }
});

export type RootAppState = RootState;

export type AppDispatcher = ReturnType<typeof store.dispatch>;
