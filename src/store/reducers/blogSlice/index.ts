import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { dataBlog } from './data';

const initialState = {
  data: dataBlog,
  filterPosts: [...new Set(dataBlog.map(({ tags }) => tags).flat())].map((el) => ({
    tag: el,
    isActive: false,
  })),
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    toggleActive: (state, action: PayloadAction<string>) => {
      state.filterPosts = state.filterPosts.map(({ tag, isActive }) =>
        tag === action.payload ? { tag, isActive: !isActive } : { tag, isActive }
      );
    },
    disableAll: (state) => {
      state.filterPosts = state.filterPosts.map(({ tag }) => ({ tag, isActive: false }));
    },
  },
});

export const { toggleActive, disableAll } = blogSlice.actions;

export default blogSlice.reducer;
