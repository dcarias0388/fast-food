import { ActionTypes } from "../actions/actionTypes";

const initialState = {
  shoppingCart: [],
  total: 0,
  open: false,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART: {
      let tabletsCopy = [...state.shoppingCart];
      let nuevoTablet = true;

      tabletsCopy.forEach((tablet) => {
        if (tablet.id === payload.id) {
          tablet.qty += payload.qty;
          nuevoTablet = false;
        }
      });

      if (nuevoTablet === true) tabletsCopy.push(payload);

      return {
        ...state,
        shoppingCart: tabletsCopy,
      };
    }
    case ActionTypes.DELETE_FROM_CART: {
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter((item) => item.id !== payload),
      };
    }
    case ActionTypes.TOTAL_PRICE: {
      let tabletsCopy = [...state.shoppingCart];
      let acc = 0;
      tabletsCopy.forEach((tablet) => {
        acc += tablet.qty * tablet.precio;
      });

      return {
        ...state,
        total: acc,
      };
    }
    case ActionTypes.OPEN_COLLAPSE: {
      let setOpen = state.open;

      return {
        ...state,
        open: !setOpen,
      };
    }

    case ActionTypes.ADD_ORDEN: {
      return {
        ...state,
        shoppingCart: [],
      };
    }

    default:
      return state;
  }
};
