import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { IPhoto } from '../../types/photos';
import { photosSlice } from '../reducers/photosSlice';

const fetchPhotosFromApi = () =>
  axios.get('https://jsonplaceholder.typicode.com/users?_limit=24');

function* fetchPhotosWorker() {
  const data: IPhoto[] = yield call(fetchPhotosFromApi);
  yield put(photosSlice.actions.photosFetchingSuccessAsync(data));
}

export function* photoWatcher() {
  yield takeEvery(
    photosSlice.actions.photosFetchingSuccess.type,
    fetchPhotosWorker
  );
}
