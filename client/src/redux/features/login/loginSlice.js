import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../services/api"

const initialState = {
    token: false, 
    userInfos: false
}

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		logout: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(api.endpoints.getAuth.matchFulfilled, (state, action) => {
				state.token = action.payload.body.token
			})
			.addMatcher(api.endpoints.getProfile.matchFulfilled, (state, action) => {
				state.userInfos = action.payload.body
			})
	},
})

export const {logout} =loginSlice.actions

export default loginSlice.reducer