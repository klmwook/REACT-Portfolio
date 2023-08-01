import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMembers = createAsyncThunk('Members/requestMembers', async () => {
	const response = await axios.get(`${process.env.PUBLIC_URL}/DB/members.json`);
	return response.data.members;
});

const membersSlice = createSlice({
	name: 'members',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchMembers.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchMembers.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchMembers.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default membersSlice.reducer;
