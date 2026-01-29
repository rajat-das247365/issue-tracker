export const initialState = {
  issues: [],
  filterStatus: "All",
  sortPriority: null,
};

export function issueReducer(state, action) {
  switch (action.type) {
    case "ADD_ISSUE":
      return {
        ...state,
        issues: [...state.issues, action.payload],
      };

    case "UPDATE_ISSUE":
      return {
        ...state,
        issues: state.issues.map((issue) =>
          issue.id === action.payload.id ? action.payload : issue
        ),
      };

  case "DELETE_ISSUE":
  return {
    ...state,
    issues: state.issues.filter(
      (issue) => issue.id !== action.payload
    ),
  };

    case "FILTER_STATUS":
      return {
        ...state,
        filterStatus: action.payload,
      };

    case "SORT_PRIORITY":
      return {
        ...state,
        sortPriority: action.payload,
      };

    default:
      return state;
  }
}
