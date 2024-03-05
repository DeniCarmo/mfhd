import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../lib/controller';
import { NewSocialsType, SocialsState } from '../../types/socials';

const initialState: SocialsState = {
  isLoading: true,
  socials: [],
};

export const getAllSocials = createAsyncThunk('socials/getSocials', async (_, thunkApi) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'socials'));
    const socials: NewSocialsType[] = querySnapshot.docs.map((doc) => ({
      title: doc.data().title,
      link: doc.data().link,
      id: doc.id,
    }));

    return socials;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const socialsSlice = createSlice({
  name: 'socialsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSocials.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSocials.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.socials = payload;
      })
      .addCase(getAllSocials.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      });
  },
});

export default socialsSlice.reducer;
