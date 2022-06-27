import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  darkMode: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    }
    // login: (state, action) => {
    //   state.user = action.payload;
    // },
    // logout: (state) => {
    //   state.user = null
    // },
    // checkDarkMode: (state, action) => {
    //   state.darkMode = state.darkMode + 1;
    // }
  },
});

export const { login, logout, checkDarkMode, setToken, setUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
