import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SocialState } from '../../types/socials';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../lib/controller';

const initialState: SocialState = {
  id: '',
  isLoading: false,
  title: '',
  link: '',
};

export const addSocial = createAsyncThunk(
  'social/addSocial',
  async (social: SocialState, thunkAPI) => {
    try {
      const addSocialRef = await addDoc(collection(db, 'socials'), social);
      const newSocial = {
        id: addSocialRef.id,
        title: social.title,
        link: social.link,
      };

      return newSocial;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addSocial.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addSocial.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.id = payload.id;
        state.title = payload.title;
        state.link = payload.link;
      })
      .addCase(addSocial.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      });
  },
});

export default socialSlice.reducer;
