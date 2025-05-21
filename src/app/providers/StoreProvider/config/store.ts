import {configureStore} from "@reduxjs/toolkit";
import {StateSchema} from "@app/providers/StoreProvider/config/StateSchema";

export function createReduxStore() {
    return configureStore<StateSchema>({
        reducer: {},

    })

}