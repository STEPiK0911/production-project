import {createSlice} from '@reduxjs/toolkit'
import {type IProfileShema} from "@entities/Profile";

const initialState: IProfileShema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    }
})

export const {reducer: profileReducer} = profileSlice;
export const {actions: profileAction} = profileSlice;