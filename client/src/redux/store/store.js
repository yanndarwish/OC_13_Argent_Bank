import { configureStore } from "@reduxjs/toolkit"
import { api } from "../services/api"
import mainReducer from "../reducers/mainReducer"

const store = configureStore({
	reducer: mainReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
})

export default store
