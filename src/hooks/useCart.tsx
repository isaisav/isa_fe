import { useContext } from "react";
import { CartContext } from "~/context/Cart"

export function useCart() {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  return { cart, addToCart, removeFromCart, clearCart };
}
