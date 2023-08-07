import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: true, user: null },
  reducers: {
    // add your non-async reducers here
    setAuth: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    }
  },
  extraReducers: {
    // add your async reducers here
  }
})

// Action creators
export const { setAuth } = authSlice.actions;

export default authSlice.reducer;