// src/store/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, register } from '../services/reqresService';

interface AuthState {
    token: string | null;
    error: string | null;
}

const initialState: AuthState = {
    token: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state:any, action: PayloadAction<string>) {
            state.token = action?.payload;
            console.log(state.token,'state');
            localStorage.setItem('token', action.payload);
            state.error = null;
        },
        loginFailure(state:any, action: PayloadAction<string>) {
            state.token = null;
            state.error = action?.payload;
        },
        registerSuccess(state:any, action: PayloadAction<string>) {
            state.token = action?.payload;
            localStorage.setItem('token', action.payload);
            state.error = null;
        },
        registerFailure(state:any, action: PayloadAction<string>) {
            state.token = null;
            state.error = action?.payload;
        },
    },
});

export const { loginSuccess, loginFailure, registerSuccess, registerFailure } = authSlice.actions;

export const loginUser = (email: any, password: any) => async (dispatch: any) => {
    try {
        const token = await login(email, password);
        dispatch(loginSuccess(token));
    } catch (error:any) {
        dispatch(loginFailure(error?.message));
    }
};

export const registerUser = (email: string, password: string) => async (dispatch: any) => {
    try {
        const token = await register(email, password);
        dispatch(registerSuccess(token));
    } catch (error:any) {
        dispatch(registerFailure(error?.message));
    }
};

export default authSlice.reducer;
