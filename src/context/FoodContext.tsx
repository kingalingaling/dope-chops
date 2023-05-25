import { createContext, useContext } from "react";
import {
  foodCartContextProviderProps,
  foodCartCon,
  cartItem,
} from "../../types";
import { useLocalStorage } from "../hooks/useLocalStorage";

const foodCartContext = createContext({} as foodCartCon);

export const foodCart = () => {
  return useContext(foodCartContext);
};

export const FoodCartProvider = ({
  children,
}: foodCartContextProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<cartItem[]>("food-cart",[]);
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  // If can find item with id in cart, get quantity, else put 0
  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  // Set cart item to current items such that if can't find item with id, add item to list with quantity 1 (new item added)
  // else for all items found in list, incrase quantity plus 1
  // else return current cartItem list as is
  const increaseCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  return (
    <foodCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity
      }}
    >
      {children}
    </foodCartContext.Provider>
  );
};
