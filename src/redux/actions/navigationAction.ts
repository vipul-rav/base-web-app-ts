import { createAction } from '@reduxjs/toolkit';
import { REDIRECT_SCREEN } from '../../constants/actionTypes';

export const navigateToNextScreen = createAction(REDIRECT_SCREEN, function prepare(nextScreen: string) {
    return {
        payload: { path: nextScreen }
    };
});
