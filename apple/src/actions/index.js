export const addToCart = (productPayload) => {
  return {
    type: "ADD_TO_CART",
    payload: productPayload,
  };
};
