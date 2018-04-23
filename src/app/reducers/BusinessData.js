/*
 * Reducers for the business data
 * that will be show on my profile
 */

// Third-party dependencies
import ProfileData from "@/constants/ProfileData";

const initialState = {
  isFetching: false,
  error: null,
  data: ProfileData.business
};

const business = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BUSINESS": {
      return {
        ...state,
        isFetching: false,
        error: null,
        data: [...state.data, action.item]
      };
    }
    default:
      return state;
  }
};

export default business;
