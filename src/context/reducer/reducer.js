export const initialState = {
  number: 1,
  loading: false,
  data: {},
};

export const AuthReducer = (initialStates, action) => {
  switch (action.type) {
    case "add_number":
      return {
        ...initialStates,
        number: action.payload,
      };

    case "req_fetch":
      return {
        ...initialStates,
        loading: action.payload,
      };
    case "fetch_success":
      return {
        ...initialStates,
        data: action.payload,
      };
    case "fetch_fail":
      return {
        ...initialStates,
        data: action.payload,
      };
    default:
      return initialStates;
  }
};
