import { all } from 'redux-saga/effects';
import { photoWatcher } from './photosSaga';

export function* rootWatcher() {
  yield all([photoWatcher()]);
}
