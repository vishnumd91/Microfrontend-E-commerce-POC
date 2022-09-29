const initialState = {
  cart: [],
  incrementCounter: 1,
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];

    case "DELETE_PRODUCT":
      var index = state
        .map((x) => {
          return x.prodId;
        })
        .indexOf(action.payload);
      state.splice(index, 1);
      return [...state];

    case "INCREMENT_QUANTITY":
      var item = state.find((q) => q.prodId === action.payload);
      item.quantity++;

      return [...state];

    case "DECREMENT_QUANTITY":
      var item = state.find((q) => q.prodId === action.payload);
      item.quantity--;
      return [...state];

    case "CLEAR_CART":
      state.splice(0, action.payload);
      return [...state];

    default:
      return state;
  }
};

export default cartReducer;
