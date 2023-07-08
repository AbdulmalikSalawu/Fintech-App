import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	show: true,
	isLoggedIn: true,
}

export const navbarSlice = createSlice({
	name: 'navbar',
	initialState,
	reducers: {
		setShow: (state) => {
			state.show = true
		},
		removeShow: (state) => {
			state.show = false
		},
		loggedInUser: (state) => {
			state.isLoggedIn = true
		},
		neutralUser: (state) => {
			state.isLoggedIn = null
		},
	},
})

export const {
	setShow, 
    removeShow,
	neutralUser,
	loggedInUser
	} = navbarSlice.actions

export default navbarSlice.reducer