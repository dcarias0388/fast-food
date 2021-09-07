import { ActionTypes } from "../actions/actionTypes";

const initialState = {
  list: [],
  loading: false,
  error: "",
  tabletSearch: "",
  characterResults: [],
};

const tabletReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.STORE_ALL: {
      return {
        ...state,
        list: payload.list,
        loading: payload.loading,
      };
    }
    case ActionTypes.SENDING_REQUEST: {
      return {
        ...state,
        loading: payload.loading,
      };
    }

    case ActionTypes.REQUEST_DATA: {
      return {
        ...state,
        list: payload.list,
        loading: payload.loading,
      };
    }

    case ActionTypes.REQUEST_ERROR: {
      return {
        ...state,
        error: payload.error,
        loading: payload.loading,
      };
    }

    case ActionTypes.SEARCH_TABLET: {
      return {
        ...state,
        tabletSearch: payload,
      };
    }

    case ActionTypes.CHARACTER_RESULTS: {
      console.log("character" + payload);
      return {
        ...state,
        characterResults: payload,
      };
    }

    default:
      return state;
  }
};

export default tabletReducer;
