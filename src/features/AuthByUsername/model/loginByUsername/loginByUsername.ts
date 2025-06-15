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
            const response = await axios.get<User[]>("http://localhost:3000/users", {
                params: { username, password }
            });

            const user = response.data[0];

            if (!user) {
                return thunkAPI.rejectWithValue("Неверный логин или пароль");
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
            thunkAPI.dispatch(userAction.setAuthData(user));

            return user;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue("Ошибка авторизации");
        }
    }
);

