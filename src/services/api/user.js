import service from "..";

const userApi = service.injectEndpoints({
  endpoints: builder => ({
    updateUser: builder.mutation({
      query: data => ({
        url: `user/update/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
    }),
  }),
});

export const {useUpdateUserMutation} = userApi;
