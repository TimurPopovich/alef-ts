import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    initialUsers: (state,action) => {
      state.users = action.payload
    }
  }
})

export const { initialUsers } = usersSlice.actions

export default usersSlice.reducer
