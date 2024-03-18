// Actions are here :

// for adding items in the cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// for deleting an item from the cart

export const delCart = (product) => {
  return {
    type: "DELETEITEM",
    payload: product,
  };
};
