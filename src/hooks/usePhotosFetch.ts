import { photosSlice } from '../store/reducers/photosSlice';
import { useAppDispatch } from './redux.hooks';

export const usePhotosFetch = () => {
  const dispatch = useAppDispatch();
  const setPhotos = () => {
    try {
      dispatch(photosSlice.actions.photosFetching());
      dispatch(photosSlice.actions.photosFetchingSuccess());
    } catch (e: any) {
      dispatch(photosSlice.actions.photosFetchingError(e.message));
    }
  };

  return setPhotos;
};
