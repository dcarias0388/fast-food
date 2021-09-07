import { ActionTypes } from "./actionTypes";

export const addToCart = (newData) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: newData,
  };
};

export const deleteFromCart = (id) => (dispatch) => {
  dispatch({ type: ActionTypes.DELETE_FROM_CART, payload: id });
};

export const addTablet = (data, qty) => (dispatch) => {
  let newData = { ...data, qty: qty };
  dispatch(addToCart(newData));
};

export const totalAcc = () => (dispatch) => {
  dispatch({ type: ActionTypes.TOTAL_PRICE });
};

export const openCollapse = () => (dispatch) => {
  dispatch({ type: ActionTypes.OPEN_COLLAPSE });
};

export const addOrden = () => (dispatch) => {
  dispatch({ type: ActionTypes.ADD_ORDEN });
};
