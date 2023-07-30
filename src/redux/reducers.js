const initialState = {
  textList: [],
};

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      return {
        ...state,
        textList: [...state.textList, action.payload.text],
      };
    default:
      return state;
  }
};

export default textReducer;
