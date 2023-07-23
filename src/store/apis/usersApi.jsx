import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const pause = (duration)=>{
 return new Promise ((resolve )=>setTimeout(resolve,duration))
}

const usersApis = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000',
  fetchFn: async (...args) => {await pause(1000);
    return fetch(...args)
  }
}),// ana url girilir
  endpoints(builder) {
    return {
      // bir şey cekmek istegimizde query diyoruz ekleme vs ise mutation
        getUsers: builder.query({ 
        providesTags: ['User'],
        query: () => {
          return {
            url: '/users',
            method: 'GET',
          }
        },
      }),
      addUsers: builder.mutation({// bir şey eklemek istegimizde mutation diyoruz 
        invalidatesTags: ()=>{
         return [{type:'User'}]},
        query: (user) => {
          return {
            url: '/users',
            method: 'POST',
            body: {
              name: user.name,

            }
          }
        },
      }),
      removeUsers: builder.mutation({// bir şey silmek istegimizde mutation diyoruz 
        invalidatesTags: ()=>{
          return [{type:'User'}]},
        query: (user) => {
          return {
           url:`/users/${user.id}`,
            method: 'DELETE',

          }
        },
      })

    }
  }
});

export const { useGetUsersQuery,useAddUsersMutation,useRemoveUsersMutation } = usersApis;
export {usersApis};

