import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {
    initialPosts: (state, action) => {
      state.posts = action.payload
    },
  },
})

export const { initialPosts } = postsSlice.actions

export default postsSlice.reducer
