import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  isloading: false,
  title: '',
  synopsis: '',
  cast: '',
  releaseDate: '',
  createdAt: '',
  rating: '',
  genre: '',
  img: {
    desktop: '',
    moible: '',
    alt: '',
  },
  link: '',
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
});

export default movieSlice.reducer;
