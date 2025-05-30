import {createSlice} from '@reduxjs/toolkit'
import {UserSchema} from "@entities/User/model/types/user";

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export const {reducer: userReducer} = userSlice;
export const {actions: userAction} = userSlice;