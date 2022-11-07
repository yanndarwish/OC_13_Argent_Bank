import { combineReducers } from "@reduxjs/toolkit"

import login from "../features/login/loginSlice"
import api from "../services/api"

const mainReducer = combineReducers({
	login,
	[api.reducerPath]: api.reducer,
})

export default mainReducer
