import { api } from '../../api';

const apiWithTags = api.enhanceEndpoints({ addTagTypes: ['UserDiary'] })

const userDiaryApi = apiWithTags.injectEndpoints({
    endpoints: (builder) => ({
        createUserDiary: builder.mutation({
            query: (body) => ({
                url: '/user-diary',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'UserDiary', id: 'LIST' }]
        }),
        getAllByQueryString: builder.query({
            query: (query) => ({
                url: `/user-diary/getAllByType/query?${query}`,
                method: 'GET',
            }),
            providesTags: [{ type: 'UserDiary', id: 'LIST' }]

        })
    })
});

export const { useCreateUserDiaryMutation, useGetAllByQueryStringQuery } = userDiaryApi;
