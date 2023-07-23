import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import type { IPost } from '../models/IPost'

export const postAPI = createApi({
  reducerPath: 'postAPI',
    
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    
  endpoints: (build) => ({
      fetchAllPosts: build.query<IPost[], number>({ 
          // <IPost[], number> number - аргумент "limit", который ожидает query
          query: (limit: number = 5) => ({ 
            url: '/posts',
            params: {
              _limit: limit
            }
          })
      })
  })
})
