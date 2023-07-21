import { createSlice } from '@reduxjs/toolkit';

const LoadingSlice = createSlice({
	name: 'loading',
	initialState: { open: false },
	reducers: {
		close: (state) => {
			state.open = false;
		},
		toggle: (state) => {
			state.open = !state.open;
		},
	},
});

export const { close, toggle } = LoadingSlice.actions;
export default LoadingSlice.reducer;
