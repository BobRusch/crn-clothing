import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItens = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItensCount = createSelector(
  [selectCartItens],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);