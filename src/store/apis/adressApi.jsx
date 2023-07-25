import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const pause = (duration) => {
    return new Promise((resolve) => setTimeout(resolve, duration))
}

const adressApi = createApi({
    reducerPath: 'adress',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args)
        }
    }),
    endpoints(builder) {
        return {
            getAdress: builder.query({
                providesTags: (result, error, kategori) => {
                    const tags = result.map((adress)=>{
                        return {type:'adress',id:adress.id}
                    })
                    tags.push({type:'KategoriAdress',id:kategori.id})
                    return tags;
                },

                query: (kategori) => {
                    return {
                        url: '/adress',
                        method: 'GET',
                        params: {
                            id: kategori.id
                        }
                    }
                },
            }),
            addAdress: builder.mutation({
                invalidatesTags: (result, error, { kategori }) => {
                    return [{ type: 'KategoriAdress', id: kategori.id }]
                },
                query: ({ kategori, street, city, country}) => { 
                    return {
                        url: '/adress',
                        method: 'POST',
                        body: {
                            kategoriId: kategori.id,
                            sokak:street,
                            sehir:city,
                            ülke:country
                        }
                    }
                },
            }),
            
            removeAdress: builder.mutation({
                invalidatesTags: (result, error, adress) => {
                    return [{ type: 'adress', id: adress.id }]
                },
                query: (album) => {
                    return {
                        url: `/adress/${adress.id}`,
                        method: 'DELETE',

                    }
                },
            })

        }
    }
});

export const { 
    useGetAdressQuery,
    useAddAdressMutation,
    useRemoveAdressMutation

} = adressApi;
export { adressApi };

