import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	show: true,
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
	},
})

export const {
	setShow, 
    removeShow,
	} = navbarSlice.actions

export default navbarSlice.reducer