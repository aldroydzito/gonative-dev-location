import { put, select, call } from 'redux-saga/effects';
import { Creators as MarkersActions } from '../ducks/markers';
import { Creators as ModalActions } from '../ducks/modal';

import api from '~/services/api';

export function* addMarker(action) {
  try {
    if (action.payload.user === '') return;

    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const markerData = {
      id: data.id,
      login: data.login,
      avatar_url: data.avatar_url,
      name: data.name,
      bio: data.bio,
      coordinates: action.payload.coordinates,
    };

    yield put(MarkersActions.addMarkerSuccess(markerData));
    yield put(ModalActions.closeModal());
  } catch (error) {
    yield put(MarkersActions.addMarkerFailure());
  }
}
