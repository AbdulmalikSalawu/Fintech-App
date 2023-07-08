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
		neutralUser: (state) => {
			state.isLoggedIn = null
		}
	},
})

export const {
	setShow, 
    removeShow,
	neutralUser
	} = navbarSlice.actions

export default navbarSlice.reducer