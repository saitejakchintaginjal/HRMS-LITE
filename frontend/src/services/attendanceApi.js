import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const attendanceApi = createApi({
  reducerPath: "attendanceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000",
  }),
  tagTypes: ["Attendance"],
  endpoints: (builder) => ({
    getAttendance: builder.query({
      query: (date) => (date ? `attendance/?date=${date}` : "attendance/"),
      providesTags: ["Attendance"],
    }),

    markAttendance: builder.mutation({
      query: (data) => ({
        url: "attendance/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Attendance"],
    }),

    updateAttendance: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `attendance/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Attendance"],
    }),

    deleteAttendance: builder.mutation({
      query: (id) => ({
        url: `attendance/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Attendance"],
    }),
  }),
});

export const {
  useGetAttendanceQuery,
  useMarkAttendanceMutation,
  useUpdateAttendanceMutation,
  useDeleteAttendanceMutation,
} = attendanceApi;
