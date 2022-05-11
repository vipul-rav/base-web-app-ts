import { createAction } from '@reduxjs/toolkit';
import { actionFailed } from './errorAction';
import { GET_METHOD } from '../../constants/stringConstant';
import * as urls from '../../constants/urls';

import {
    FETCH_POSTS,
    FETCH_POSTS_DETAILS,
    FETCH_POSTS_DETAILS_SUCCESS,
    FETCH_POSTS_SUCCESS
} from '../../constants/actionTypes';

export const getPostList = createAction(FETCH_POSTS, function prepare() {
    return {
        meta: {
            loading: true
        },
        payload: {
            endpoint: urls.GET_POST_LIST,
            method: GET_METHOD,
            onSuccess: postsSuccess,
            onFailure: actionFailed
        }
    };
});

export const postsSuccess = (response: any) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        meta: {
            loading: false,
            nextAction: [getPostDetails(Number(response[0].id))]
        },
        payload: response
    };
};

export const getPostDetails = createAction(FETCH_POSTS_DETAILS, function prepare(postId: number) {
    return {
        meta: {
            loading: true
        },
        payload: {
            endpoint: `${urls.GET_POST_BY_ID}${postId}`,
            method: GET_METHOD,
            onSuccess: postDetailSuccess,
            onFailure: actionFailed
        }
    };
});

const postDetailSuccess = createAction(FETCH_POSTS_DETAILS_SUCCESS, function prepare(response) {
    return {
        payload: response,
        meta: {
            loading: false
        }
    };
});
