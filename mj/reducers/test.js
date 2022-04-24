import produce from "immer";

export const initState = {};

const reducer = (state = initState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        break;
    }
  });

export default reducer;