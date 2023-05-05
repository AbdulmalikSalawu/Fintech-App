import {configureStore} from '@reduxjs/toolkit'
import navbarReducer from '../Features/navSlice'

export const store = configureStore({
	reducer: {
		navbar: navbarReducer,
	},
})