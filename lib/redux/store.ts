import { configureStore } from "@reduxjs/toolkit";
import devtoolsReducer from "./features/devtoolsSlice";

export const store = configureStore({
  reducer: {
    devtools: devtoolsReducer,
  },
  devTools: process.env.ENVIRONMENT === "development"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;