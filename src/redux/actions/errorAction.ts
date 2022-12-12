import { createAction } from '@reduxjs/toolkit';
import * as actionTypes from '../../constants/actionTypes';

export const actionFailed = createAction(actionTypes.FETCH_FAILED, function prepare(response: any) {
    return {
        meta: { loading: false },
        payload: response
    };
});
