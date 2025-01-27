import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItemType, EachProductType } from "../../typescript/Types";

interface InitialStateType {
  cartProducts: CartItemType[];
}

const initialState: InitialStateType = {
  cartProducts: [],
};

const CartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<EachProductType>) => {
      const newProduct = { ...action.payload, quantity: 1 };
      state.cartProducts = [...state.cartProducts, newProduct];
    },
    cartIncrement: (state, action: PayloadAction<number>) => {
      const IndexOfItemNeedToBeIncremented = state.cartProducts.findIndex(
        (eachItem) => eachItem.id === action.payload
      );
      if (IndexOfItemNeedToBeIncremented === -1) return;
      const previousItem = state.cartProducts[IndexOfItemNeedToBeIncremented];
      const updatedItem = {
        ...previousItem,
        quantity: previousItem.quantity + 1,
      };
      state.cartProducts.splice(IndexOfItemNeedToBeIncremented, 1, updatedItem);
    },
    cartDecrement: (state, action: PayloadAction<number>) => {
      const IndexOfItemNeedToBeIncremented = state.cartProducts.findIndex(
        (eachItem) => eachItem.id === action.payload
      );
      if (IndexOfItemNeedToBeIncremented === -1) return;
      const previousItem = state.cartProducts[IndexOfItemNeedToBeIncremented];

      const updatedItem = {
        ...previousItem,
        quantity: previousItem.quantity - 1,
      };
      state.cartProducts.splice(IndexOfItemNeedToBeIncremented, 1, updatedItem);
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      const itemIndex = state.cartProducts.findIndex(
        (each) => each.id === action.payload
      );
      state.cartProducts.splice(itemIndex, 1);
    },
  },
});

export const selectCartProducts = (state: { cartSlice: InitialStateType }) =>
  state.cartSlice.cartProducts;

export default CartSlice.reducer;
export const { addToCart, cartDecrement, cartIncrement, removeCartItem } =
  CartSlice.actions;
