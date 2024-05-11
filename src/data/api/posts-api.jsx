import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath: 'Api/posts',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_API_URL,
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',
            providesTags: ['posts'],
        }),
        deletePost: builder.mutation(
            {
                query: ({id}) => {
                    return ({
                        url: `posts/${id}`,
                        method: 'DELETE',
                    });
                },
                invalidatesTags: ['posts'],
            }
        ),
        addPost: builder.mutation(
            {
                query: (payload) => {
                    console.log(payload)
                    return ({
                        url: 'posts',
                        method: 'POST',
                        body: payload,
                    })
                },
                invalidatesTags: ['posts'],
            }
        ),
        updatePost: builder.mutation(
            {
                query: ({id, payload}) => {
                    return ({
                        url: `posts/${id}`,
                        method: 'PUT',
                        body: payload,
                    })
                },
                invalidatesTags: ['posts'],
            }
        )
    })
})
export const {
    useGetPostsQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation
} = postsApi;