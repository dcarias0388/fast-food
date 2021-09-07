import { ActionTypes } from "./actionTypes";

export const store_all = (data) => ({
  type: ActionTypes.STORE_ALL,
  payload: {
    list: data.list,
    loading: data.loading,
  },
});

export const sending_request = () => ({
  type: ActionTypes.SENDING_REQUEST,
  payload: {
    loading: true,
  },
});

export const request_data = (data) => ({
  type: ActionTypes.REQUEST_DATA,
  payload: {
    list: data,
    loading: false,
  },
});

export const request_error = (error) => ({
  type: ActionTypes.REQUEST_ERROR,
  payload: {
    error: error,
    loading: false,
  },
});

const getData = () =>
  fetch("json/tablets.json")
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error));

export const fetchData = () => (dispatch) => {
  dispatch(sending_request());
  return getData()
    .then((data) => {
      dispatch(request_data(data));
    })
    .catch((error) => {
      dispatch(request_error(error));
    });
};

export const updateSearch = (value) => (dispatch) => {
  dispatch({ type: ActionTypes.SEARCH_TABLET, payload: value });
};

export const resultsSearch = (result) => (dispatch) => {
  dispatch({ type: ActionTypes.CHARACTER_RESULTS, payload: result });
};
