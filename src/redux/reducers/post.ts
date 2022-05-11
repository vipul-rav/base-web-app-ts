import { createReducer } from '@reduxjs/toolkit';
import { Reducer } from 'redux';
import { FETCH_POSTS_SUCCESS, FETCH_POSTS_DETAILS_SUCCESS } from '../../constants/actionTypes';
import { postState } from './reducerTypes';

const initialState: postState = {
    postList: [],
    postDetail: {
        userId: 0,
        id: 0,
        title: '',
        body: ''
    }
};

const post: Reducer<postState> = createReducer(initialState, {
    [FETCH_POSTS_SUCCESS]: (state, action) => {
        return { ...state, postList: action.payload };
    },
    [FETCH_POSTS_DETAILS_SUCCESS]: (state, action) => {
        return { ...state, postDetail: action.payload };
    }
});

export { post };
