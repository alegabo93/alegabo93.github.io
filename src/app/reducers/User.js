// Reducers for user profile
const initialState = {
  isFetching: false,
  error: null,
  data: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "USER_PENDING":
      return {
        ...state,
        isFetching: true,
        error: null,
        data: null
      };
    case "USER_FULFILLED": {
      return {
        ...state,
        isFetching: false,
        data: action.payload.data
      };
    }
    case "USER_REJECTED": {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
};

export default user;
