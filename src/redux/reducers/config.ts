import { createReducer } from '@reduxjs/toolkit';
import { Reducer } from "redux";
import {FETCH_CONFIG_SUCCESS, FETCH_CONTENT_SUCCESS} from '../../constants/actionTypes';
import {configState} from './reducerTypes'

const initialState:configState = {
    envUrl:{},
    externalContent:{}
};


const config:Reducer<configState> = createReducer(
    initialState,
    {
        [FETCH_CONFIG_SUCCESS]: (state, action) => {
            return { ...state, envUrl: action.payload };
        },
        [FETCH_CONTENT_SUCCESS]: (state, action) => {
            return { ...state, externalContent: action.payload };
        }
    }
);

export { config };
