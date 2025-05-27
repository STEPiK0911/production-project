import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "@app/providers/StoreProvider/config/StateSchema";
import {userReducer} from "@entities/User";

export function createReduxStore() {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
    }
    return configureStore<StateSchema>({
        reducer: rootReducer,
    })

}