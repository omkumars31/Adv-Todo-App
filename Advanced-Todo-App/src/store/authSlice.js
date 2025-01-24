import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = JSON.parse(localStorage.getItem('auth')) || {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem('auth', JSON.stringify(state));
    },
    logout: (state) => {
        console.log('Logout action dispatched'); // Debugging log
        state.isAuthenticated = false;
        state.user = null;
        localStorage.removeItem('auth'); // Ensure session persistence
      },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
