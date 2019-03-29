export const Types = {
  ADD_REQUEST: 'markers/ADD_REQUEST',
  ADD_SUCCESS: 'markers/ADD_SUCCESS',
  ADD_FAILURE: 'markers/ADD_FAILURE',
  RESET: 'markers/RESET',
};

const INITIAL_STATE = {
  list: [],
  loading: false,
  error: false,
};

export default function markers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true, error: false };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
        error: false,
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: true };
    case Types.RESET:
      return { ...state, loading: false, error: false };
    default:
      return state;
  }
}

export const Creators = {
  addMarkerRequest: ({ user, coordinates }) => ({
    type: Types.ADD_REQUEST,
    payload: { user, coordinates },
  }),
  addMarkerSuccess: data => ({ type: Types.ADD_SUCCESS, payload: { ...data } }),
  addMarkerFailure: () => ({ type: Types.ADD_FAILURE }),
  reset: () => ({ type: Types.RESET }),
};
