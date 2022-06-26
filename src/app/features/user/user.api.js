import { api } from '../../api';

const apiWithTags = api.enhanceEndpoints({ addTagTypes: ['User'] })

const userApi = apiWithTags.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: '/user/login',
                method: 'POST',
                body,
            })
        }),
        register: builder.mutation({
            query: (body) => ({
                url: '/user',
                method: 'POST',
                body,
            })
        }),
    })
})
export const {
    useLoginMutation,
    useRegisterMutation,
} = userApi