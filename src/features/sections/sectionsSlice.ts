import { SectionItemType } from './../../types/sections';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../lib/controller';
import { SectionsState, SectionType } from '../../types/sections';

const initialState: SectionsState = {
  isLoading: false,
  sections: [],
};

export const getAllSections = createAsyncThunk('sections/getSections', async (_, thunkAPI) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'sections'));
    const sections: SectionType[] = querySnapshot.docs.map((section) => ({
      id: section.id,
      title: section.data().title,
      items: section
        .data()
        .items.map((item: SectionItemType) => ({ title: item.title, link: item.link })),
    }));

    return sections;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const sectionsSlice = createSlice({
  name: 'sectionsSlice',
  initialState,
  reducers: {
    updateItem: (state, { payload }) => {
      state.sections = state.sections.map((section) => {
        if (section.id === payload.id) {
          section.items = payload.items;
        }
        return section;
      });
    },
    addNewItem: (state, { payload }) => {
      state.sections.map((section) => {
        if (section.id === payload.id) {
          section.items = payload.newItem;
          return section;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSections.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSections.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.sections = payload;
      })
      .addCase(getAllSections.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      });
  },
});

export const { updateItem, addNewItem } = sectionsSlice.actions;

export default sectionsSlice.reducer;
