import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPhoto, IPhotosState } from '../../types/photos';

const initialState: IPhotosState = {
  photos: [],
  activePhoto: 0,
  error: '',
  isLoading: false,
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    photosFetching(state) {
      state.isLoading = true;
    },

    photosFetchingSuccess() {},

    photosFetchingSuccessAsync(state, action: PayloadAction<IPhoto[]>) {
      state.isLoading = false;
      state.photos = action.payload;
    },

    photosFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default photosSlice.reducer;
