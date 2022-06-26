import {api} from '../../api';

const apiWithTags = api.enhanceEndpoints({addTagTypes: ['UserDiary']})

const userDiaryApi = apiWithTags.injectEndpoints({
    endpoints: (builder) => ({ 
        createUserDiary: builder.mutation({
            query: (body) => ({
                url: '/userDiary',
                method: 'POST',
                body,
            })
        }),
    })
});
