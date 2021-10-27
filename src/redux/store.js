import { configureStore } from '@reduxjs/toolkit'
import { postsSlice } from './reducers/postsReducer'
import { usersSlice } from './reducers/usersReducer'

export default configureStore({
  reducer: {
    posts: postsSlice.reducer,
    users: usersSlice.reducer,
  },
})
