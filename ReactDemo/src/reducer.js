export const initialState = [];

// Reducer
export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case "STOP_TIMER":
      return [...state, action.payload];
    default:
      return state;
  }
}

export const saveOnTimerStop = (payload) => {
  return {
    type: "STOP_TIMER",
    payload,
  };
};
