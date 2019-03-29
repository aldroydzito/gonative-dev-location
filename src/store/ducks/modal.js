export const Types = {
  OPEN_MODAL: 'modal/OPEN_MODAL',
  CLOSE_MODAL: 'modal/CLOSE_MODAL',
  ERROR: 'modal/ERROR',
};

const INITIAL_STATE = {
  user: '',
  coordinates: null,
  visible: false,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MODAL:
      return {
        ...state,
        visible: true,
        coordinates: action.payload.coordinates,
      };
    case Types.CLOSE_MODAL:
      return { ...state, visible: false };
    default:
      return state;
  }
}

export const Creators = {
  openModal: coordinates => ({ type: Types.OPEN_MODAL, payload: { coordinates } }),
  closeModal: () => ({ type: Types.CLOSE_MODAL }),
};
