import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const pause = (duration) => {
    return new Promise((resolve) => setTimeout(resolve, duration))
}

const kategoriApi = createApi({
    reducerPath: 'kategori',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args)
        }
    }),
    endpoints(builder) {
        return {
            getKategori: builder.query({
                providesTags: (result, error, user) => {
                    const tags = result.map((kategoris)=>{
                        return {type:'kategori',id:kategoris.id}
                    })
                    tags.push({type:'UsersKategori',id:user.id})
                    return tags;
                },

                query: (user) => {
                    return {
                        url: '/kategori',
                        method: 'GET',
                        params: {
                            userId: user.id
                        }
                    }
                },
            }),
            addKategori: builder.mutation({
                invalidatesTags: (result, error, { user }) => {
                  return [{ type: 'UsersKategori', id: user.id }]
                },
                query: ({ title, user }) => {
                  return {
                    url: '/kategori',
                    method: 'POST',
                    body: {
                      title: title,
                      userId: user.id
                    }
                  }
                },
              }),
            removeKategori: builder.mutation({
                invalidatesTags: (result, error, kategori) => {
                    return [{ type: 'kategori', id: kategori.id }]
                },
                query: (album) => {
                    return {
                        url: `/kategori/${kategori.id}`,
                        method: 'DELETE',

                    }
                },
            })

        }
    }
});

export const { 
    useGetKategoriQuery,
    useAddKategoriMutation,
    useRemoveKategoriMutation
} = kategoriApi;
export { kategoriApi };

