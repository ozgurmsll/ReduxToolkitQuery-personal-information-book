import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const pause = (duration) => {
    return new Promise((resolve) => setTimeout(resolve, duration))
}

const AlbumKategoriApis = createApi({
    reducerPath: 'AlbumKategori',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args)
        }
    }),
    endpoints(builder) {
        return {
            getAlbums: builder.query({
                providesTags: (result, error, kategori) => {
                    const tags = result.map((Albums)=>{
                        return {type:'AlbumKategori',id:Albums.id}
                    })
                    tags.push({type:'AlbumsKategori',id:kategori.id})
                    return tags;
                },

                query: (kategoriId) => {
                    return {
                        url: '/AlbumKategori',
                        method: 'GET',
                        params: {
                            kategoriId: kategoriId.id,


                        }
                    }
                },
            }),
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, { kategori }) => {
                    return [
                        { type: 'AlbumsKategori', id: kategori.id },
                    ]
                },
                query: ({ kategori,name}) => { 
                    return {
                        url: '/AlbumKategori',
                        method: 'POST',
                        body: {
                            kategoriId: kategori.id,
                            name:name
                           
                        }
                    }
                },
            }),
            
            
            removeAlbum: builder.mutation({
                invalidatesTags: (result, error, albums) => {
                    return [{ type: 'AlbumKategori', id: albums.id }]
                },
                query: (album) => { 
                    return {
                        url: `/AlbumKategori/${album.id}`,
                        method: 'DELETE',

                    }
                },
            })

        }
    }
});

export const { 
    useGetAlbumsQuery
    ,useAddAlbumMutation
    ,useRemoveAlbumMutation

} = AlbumKategoriApis;
export { AlbumKategoriApis };
