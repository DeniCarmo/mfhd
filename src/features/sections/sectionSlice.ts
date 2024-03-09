import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SectionState, SectionType } from '../../types/sections';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../lib/controller';

const initialState: SectionState = {
  id: '',
  isLoading: false,
  title: '',
  items: [],
};

export const addSection = createAsyncThunk(
  'section/addSection',
  async (section: SectionState, thunkAPI) => {
    try {
      const addSectionRef = await addDoc(collection(db, 'sections'), section);
      const newSection = { id: addSectionRef.id, section };

      return newSection;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateSectionDB = createAsyncThunk(
  'section/updateSection',
  async (section: SectionType, thunkAPI) => {
    try {
      const getSection = doc(db, `sections/${section.id}`);

      const updatedSection = {
        title: section.title,
        items: section.items,
      };

      await setDoc(getSection, updatedSection, { merge: true });

      return updatedSection;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const sectionSlice = createSlice({
  name: 'sectionSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addSection.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addSection.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.id = payload.id;
        state.title = payload.section.title;
        state.items = payload.section.items;
      })
      .addCase(addSection.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      });
  },
});

export default sectionSlice.reducer;
