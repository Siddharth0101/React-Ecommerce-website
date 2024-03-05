import { useReducer } from "react";
import CartContext from "./cart-context";
import { Alert } from "react-bootstrap";

const CardProvider = (props) => {
  const defaultState = {
    items: [],
  };
  const cartReducer = (state, action) => {
    if (action.type == "ADD") {
      const existingIndex = state.items.findIndex(
        (item) => item.id == action.item.id
      );
      const existingItem = state.items[existingIndex];
      let updatedItems;
      if (existingItem) {
        const updatedItem = { ...existingItem };
        updatedItems = [...state.items];
        updatedItems[existingIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      return {
        items: updatedItems,
      };
    }
    if (action.type == "REMOVE") {
      const existingIndex = state.items.findIndex(
        (item) => item.id == action.id
      );
      const existingItem = state.items[existingIndex];
      let updatedItems;
      if (existingItem) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      }
      return {
        items: updatedItems,
      };
    }
    return defaultState;
  };
  const [cartState, dispatchCartState] = useReducer(cartReducer, defaultState);
  const addItemHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CardProvider;
