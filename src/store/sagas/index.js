import { all, takeLatest } from 'redux-saga/effects';

import { Types as MarkersTypes } from '~/store/ducks/markers';
import { addMarker } from './markers';

export default function* rootSaga() {
  yield all([takeLatest(MarkersTypes.ADD_REQUEST, addMarker)]);
}
