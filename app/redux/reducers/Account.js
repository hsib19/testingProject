import * as actionTypes from "../type";

const initialState = {
  loading: true,
  data: '',
  error: ''
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        data: action.data,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case actionTypes.AUTH_DATA:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    
    case actionTypes.AUTH_FAILED:
    return {
      loading: false,
      data: '',
      menu: '',
      error: "error"
    };

    default:
      return state;
  }
};
