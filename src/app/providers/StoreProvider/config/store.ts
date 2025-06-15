import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "@app/providers/StoreProvider/config/StateSchema";
import {userReducer} from "@entities/User";
import {loginReducer} from "@features/AuthByUsername";
import {profileReducer} from "@entities/Profile";

export function createReduxStore() {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
        profile: profileReducer,
    }
    return configureStore<StateSchema>({
        reducer: rootReducer,
    })

}