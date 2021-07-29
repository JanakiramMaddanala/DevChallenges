import _ from "lodash";
// export const usersReducer = (state = [], action) => {
//   switch (action.type) {
//     case "DELETE_USER":
//       return state.filter((user) => user.id !== action.payload);
//     case "FETCH_USERS":
//       return [
//         { id: 1, name: "Ram" },
//         { id: 2, name: "Ram 1" },
//         { id: 3, name: "Ram 2" },
//         { id: 4, name: "Ram 3" },
//         { id: 5, name: "Ram 4" },
//       ];
//     case "CREATE_USER":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload);
    case "FETCH_USERS":
      return [
        { id: "1", name: "Ram" },
        { id: "2", name: "Ram 1" },
        { id: "3", name: "Ram 2" },
        { id: "4", name: "Ram 3" },
        { id: "5", name: "Ram 4" },
      ];
    case "CREATE_USER":
      const user = _.find(state, (f) => f.id === action.payload.id);

      if (!user) {
        state.push();
        return [...state, action.payload];
      }
      return state;
    default:
      return state;
  }
};

export const userFormReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_FORM_CHANGE":
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};
