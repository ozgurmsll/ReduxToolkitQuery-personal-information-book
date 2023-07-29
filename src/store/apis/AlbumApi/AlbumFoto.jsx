import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const pause = (duration) => {
    return new Promise((resolve) => setTimeout(resolve, duration))
}

const albumFoto = createApi({
    reducerPath: 'foto',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args)
        }
    }),
    endpoints(builder) {
        return {
            getFoto: builder.query({
                providesTags: (result, error, album) => {
                    const tags = result.map((album)=>{
                        return {type:'foto',id:album.id}
                    })
                    tags.push({type:'AlbumFoto',id:album.id})
                    return tags;
                },

                query: (foto) => {
                    return {
                        url: '/AlbumFoto',
                        method: 'GET',
                        params: {
                            albumKategoriId: foto.id
                        }
                    }
                },
            }),
            addFoto: builder.mutation({
                invalidatesTags: (result, error, { user }) => {
                  return [{ type: 'UsersKategori', id: user.id }]
                },
                query: ({ title, user }) => {
                  return {
                    url: '/AlbumFoto',
                    method: 'POST',
                    body: {
                      title: title,
                      userId: user.id
                    }
                  }
                },
              }),
            removeFoto: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: 'album', id: album.id }]
                },
                query: (foto) => {
                    return {
                        url: `/AlbumFoto/${foto.id}`,
                        method: 'DELETE',

                    }
                },
            })

        }
    }
});

export const { 
    useGetFotoQuery,
    useAddFotoMutation,

    useRemoveFotoMutation,
 
} = albumFoto;
export { albumFoto };

