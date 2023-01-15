import { createSlice } from '@reduxjs/toolkit';

const movie_Slice = createSlice({
	name: 'movieData',
	initialState: {
		popular: [],
		top_rated: [],
		upcoming: [],
		now_playing: [],
		modalCard: {
			hover: false,
			image: null,
			title: null,
			text: null,
			part: null,
		},
	},
	reducers: {
		movies_Data: (state, action) => {
			state.popular = action.payload.popular;
			state.top_rated = action.payload.top_rated;
			state.upcoming = action.payload.upcoming;
			state.now_playing = action.payload.now_playing;
		},
		toggleModal: (state, action) => {
			state.modalCard = action.payload;
		},
	},
});

export const { movies_Data, toggleModal } = movie_Slice.actions;
export default movie_Slice.reducer;
