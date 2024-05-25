import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EachProductType, productsData } from "../../typescript/Types";

interface InitialStateType {
  apiStatus: "INITIAL" | "SUCCESS" | "PENDING" | "REJECTED";
  products: EachProductType[];
  isModalOpen: boolean;
  productToBeEdited: EachProductType | null;
}

const initialState: InitialStateType = {
  apiStatus: "INITIAL",
  products: productsData,
  isModalOpen: false,
  productToBeEdited: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    apiStatusReducer: (
      state,
      action: PayloadAction<"INITIAL" | "SUCCESS" | "PENDING" | "REJECTED">
    ) => {
      state.apiStatus = action.payload;
    },
    addProduct: (state, action: PayloadAction<EachProductType>) => {
      state.products = [...state.products, action.payload];
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      const updatedProducts = state.products.filter(
        (each) => each.id !== +action.payload
      );
      state.products = updatedProducts;
    },
    toggleModalReducer: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    productToBeEditInModal: (
      state,
      action: PayloadAction<EachProductType | null>
    ) => {
      state.productToBeEdited = action.payload;
    },
    updateProduct: (state, action: PayloadAction<EachProductType>) => {
      const updatedProducts = state.products.map((each) =>
        each.id === action.payload.id ? action.payload : each
      );
      state.products = updatedProducts;
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  updateProduct,
  apiStatusReducer,
  toggleModalReducer,
  productToBeEditInModal,
} = productSlice.actions;
export default productSlice.reducer;
