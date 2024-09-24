import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://food-delivery-user.vercel.app/api/",
  // prepareHeaders: async headers => {
  //   const userData = await AsyncStorage.getItem("user");
  //   const data = JSON.parse(userData);
  //   if (data?.tokens) {
  //     headers.set("authorization", `Bearer ${data?.tokens?.access}`);
  //   }
  //   return headers;
  // },
});

const service = createApi({
  reducerPath: "service",
  baseQuery,
  tagTypes: [],
  endpoints: builder => ({}),
});

export default service;
