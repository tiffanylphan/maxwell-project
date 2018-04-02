import actionTypes from '../constants/mainConstants';

export const initialState = {}

export default function mainReducer(state = initialState, action) {
  const { type, name } = action;

  switch (type) {
    default:
      return state;
  }
}
