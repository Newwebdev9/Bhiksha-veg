import React from "react";

const CartContext = React.createContext({
  intems: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItems: (id) => {},
  clearCart: () => {}
});

export default CartContext;
