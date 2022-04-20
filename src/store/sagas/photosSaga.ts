import axios from 'axios';
import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { IPhoto } from '../../types/photos';
import { photosSlice } from '../reducers/photosSlice';

const fetchPhotosFromApi = () =>
  axios.get('https://jsonplaceholder.typicode.com/photos?_limit=24');

function* fetchPhotosWorker() {
  const response: SagaReturnType<typeof fetchPhotosFromApi> = yield call(
    fetchPhotosFromApi
  );
  const data: IPhoto[] = response.data;
  yield put(photosSlice.actions.photosFetchingSuccessAsync(data));
}

export function* photoWatcher() {
  yield takeEvery(
    photosSlice.actions.photosFetchingSuccess.type,
    fetchPhotosWorker
  );
}
