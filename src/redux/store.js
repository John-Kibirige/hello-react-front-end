import { configureStore } from "@reduxjs/toolkit";
import greetingSlice from "./greeting";

const store = configureStore({
    reducer: {
        greeting: greetingSlice.reducer,
    }
});

export default store;