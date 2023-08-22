import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://something.com",
    prepareHeaders(headers) {
      return headers;
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({}),
});

export default apiSlice;
