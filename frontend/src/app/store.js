import { configureStore } from "@reduxjs/toolkit";
import { employeeApi } from "../services/employeeApi";
import { attendanceApi } from "../services/attendanceApi";

export const store = configureStore({
  reducer: {
    [employeeApi.reducerPath]: employeeApi.reducer,
    [attendanceApi.reducerPath]: attendanceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      employeeApi.middleware,
      attendanceApi.middleware,
    ),
});
