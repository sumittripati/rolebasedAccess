import { configureStore } from "@reduxjs/toolkit";
import { curdSlice } from "./Redux/Slices/crudSlice";
import { authSlice } from "./Redux/Slices/authSlice";

export const store = configureStore({
    reducer: {
        [curdSlice.reducerPath]: curdSlice.reducer,
        [authSlice.reducerPath]: authSlice.reducer
    }
});