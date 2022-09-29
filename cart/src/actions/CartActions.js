export const increaseQuantity = (id) => {
  return {
    type: "INCREMENT_QUANTITY",
    payload: id,
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: "DECREMENT_QUANTITY",
    payload: id,
  };
};

export const deleteProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: id,
  };
};
export const clearCart = (length) => {
  return {
    type: "CLEAR_CART",
    payload: length,
  };
};
