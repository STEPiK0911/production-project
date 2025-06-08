import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {User, userAction} from "@entities/User";
import {USER_LOCALSTORAGE_KEY} from "@shared/const/localStorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    {
        rejectValue: string
    }
>(
    "login/loginByUsername",
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await axios.post<User>("http://localhost:8000/users", {
                username,
                password
            });
            if(response.status !== 200) {
                throw new Error("Ошбка ав")
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userAction.setAuthData(response.data))

            return response.data;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue("Ошибка авторизации");
        }
    }
);
