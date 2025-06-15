import { Reducer, combineReducers } from '@reduxjs/toolkit';
import { store } from '@app/providers/StoreProvider/config/store'; // укажи путь к своему store
import { StateSchema } from '@app/providers/StoreProvider/config/StateSchema';

export const injectReducer = (key: StateSchema, reducer: Reducer) => {
    // создаём поле asyncReducers, если его нет
    const asyncReducers = (store as any).asyncReducers ?? {};

    if (!asyncReducers[key]) {
        asyncReducers[key] = reducer;

        // обновляем store
        (store as any).asyncReducers = asyncReducers;

        store.replaceReducer(combineReducers(asyncReducers));
    }
};
