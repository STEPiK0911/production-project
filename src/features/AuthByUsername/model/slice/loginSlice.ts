import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LoginShema} from "@features/AuthByUsername/model/types/loginShema";
import {loginByUsername} from "@features/AuthByUsername/model/loginByUsername/loginByUsername";

const initialState: LoginShema = {
    isLoading: false,
    username: '',
    password: ''
};

export const loginSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload;
            })
    }
})

export const {reducer: loginReducer} = loginSlice;
export const {actions: loginAction} = loginSlice;