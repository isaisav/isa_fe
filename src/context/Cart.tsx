import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { CartContextType, Item, Props } from "~types";

export const CartContext = createContext<CartContextType>({
  cart: null,
  addToCart: () => { },
  removeFromCart: () => { },
  clearCart: () => { }
})

export function CartContextProvider({ children }: Props) {
  const [cart, setCart] = useState<Item[]>([]);
  const notify = (newItemName: string) => toast.success(`Added: ${newItemName}`, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const notifyRemoved = (newItemName: string) => toast.success(`Removed: ${newItemName}`, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const addToCart = (newItem: Item) => {
    setCart([
      ...cart,
      newItem
    ]);
    notify(newItem.name);
  }

  const removeFromCart = (itemName: string, itemSize: string) => {
    setCart(
      cart.filter(c => !(c.name === itemName && c.size === itemSize))
    )
    notifyRemoved(itemName);
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )

}
