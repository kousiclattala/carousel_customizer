import { createSlice } from "@reduxjs/toolkit";

const photoSlice = createSlice({
  name: "photo",
  initialState: {
    photos: [],
  },
  reducers: {
    getPhotos: (state, action) => {
      state.photos = action.payload;
    },
  },
});

export const { getPhotos } = photoSlice.actions;

export default photoSlice.reducer;
