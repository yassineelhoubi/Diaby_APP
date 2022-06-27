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
            invalidatesTags: [{ type: 'UserDiary', id: 'List' }]
        }),
        getAllByQueryString: builder.query({
            query: (query) => ({
                url: `/user-diary/getAllByType/query?${query}`,
                method: 'GET',
            }),
            providesTags: [{ type: 'UserDiary', name: 'LIST' }]

        })
    })
});

export const { useCreateUserDiaryMutation, useGetAllByQueryStringQuery } = userDiaryApi;
