import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	show: true,
	isNavNeeded: true,
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
		navNeeded: (state) => {
			state.isNavNeeded = true
		},
		navNotNeeded: (state) => {
			state.isNavNeeded = false
		}
		
	},
})

export const {
	setShow, 
    removeShow,
	navNeeded,
	navNotNeeded
	} = navbarSlice.actions

export default navbarSlice.reducer