export const initialState = {
  avatar: '',
};

type ACTIONTYPE =
  | { type: 'set_avatar'; payload: string }
  | { type: 'set_favorites'; payload: string };

export const UserReducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'set_avatar':
      return { ...state, avatar: action.payload.valueOf };

    default:
      return state;
  }
};
