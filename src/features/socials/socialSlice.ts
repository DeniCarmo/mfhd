import { NewSocialsType } from './../../types/socials';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SocialState } from '../../types/socials';
import { addDoc, collection, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../lib/controller';
import { toast } from 'react-toastify';

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

export const updateSocialDB = createAsyncThunk(
  'social/updateSocial',
  async (social: NewSocialsType, thunkAPI) => {
    try {
      const getSocial = doc(db, `socials/${social.id}`);

      const updatedSocial = {
        title: social.title,
        link: social.link,
      };

      await setDoc(getSocial, updatedSocial, { merge: true });

      toast.success('Social successfully updated.');
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteSocialDB = createAsyncThunk(
  'social/deleteSocial',
  async (id: string, thunkAPI) => {
    try {
      const document = doc(db, `socials/${id}`);

      await deleteDoc(document);

      toast.success('Social successfully deleted.');
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
