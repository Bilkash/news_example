import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: false,
	reducers: {
		logIn: () => true,
		logOut: () => false,
	}
});

export const {logIn, logOut} = authSlice.actions;

export default authSlice.reducer;