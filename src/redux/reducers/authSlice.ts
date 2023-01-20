import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    },
  },
})

export const { login, logout } = authSlice.actions

export const getIsAuthenticated = (state: any) => {
  console.log(state, 'state')
  return state.auth.isAuthenticated
}

export default authSlice.reducer
