import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './features/movies/movieSlice';
import socialsSlice from './features/socials/socialsSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import sectionsSlice from './features/sections/sectionsSlice';

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    socials: socialsSlice,
    social: socialsSlice,
    sections: sectionsSlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
