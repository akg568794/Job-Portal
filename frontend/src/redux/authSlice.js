import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        user: null,
        token: null, // Add token to the initial state
    },
    reducers: {
        // actions
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload; // Add action to set the token
        },
        logout: (state) => {
            state.user = null;
            state.token = null; // Add action to clear the token on logout
        }
    }
});

export const { setLoading, setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
