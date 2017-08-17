// Reducers for posts

const initialState = {
  isFetching: false,
  error: null,
  data: []
};

const posts = (state = initialState, action) => {
  if (action.error) {
    return {
      ...state,
      isFetching: false,
      error: action.error.payload.message
    };
  }
  switch (action.type) {
    case "POSTS_PENDING":
      return {
        ...state,
        isFetching: true
      };
    case "POSTS_FULFILLED": {
      return {
        ...state,
        isFetching: false,
        data: action.payload.data
      };
    }
    default:
      return state;
  }
};

export default posts;
