import service from "..";

const authenticationApi = service.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: userData => ({
        url: "user/register/",
        method: "POST",
        body: userData,
      }),
    }),
    otpVerify: builder.mutation({
      query: userData => ({
        url: `user/verify`,
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const {useLoginMutation, useOtpVerifyMutation} = authenticationApi;
