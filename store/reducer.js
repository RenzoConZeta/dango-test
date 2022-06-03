import {
  CHANGE_QUANTITY,
  CHANGE_TITLE,
  CHANGE_TITLE_EDITABLE,
  CHANGE_TITLE_SIZE,
} from './types';

export function reducer(state, { type, payload }) {
  let index;
  switch (type) {
    case CHANGE_TITLE_EDITABLE:
      index = state.items.findIndex((item) => item.id === payload.id);
      state.items[index].titleEditable = payload.titleEditable;
      return {
        ...state,
      };
    case CHANGE_TITLE:
      index = state.items.findIndex((item) => item.id === payload.id);
      state.items[index].title = payload.title;
      return {
        ...state,
      };
    case CHANGE_TITLE_SIZE:
      index = state.items.findIndex((item) => item.id === payload.id);
      state.items[index].titleSize = payload.titleSize;
      return {
        ...state,
      };
    case CHANGE_QUANTITY:
      index = state.items.findIndex((item) => item.id === payload.id);
      state.items[index].quantity = payload.quantity;
      return {
        ...state,
      };
    default:
      return state;
  }
}
