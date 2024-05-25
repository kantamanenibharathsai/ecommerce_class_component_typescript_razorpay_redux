import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Box,
  Button,
  Stack,
} from "@mui/material";
import eachProductStyles from "./EachProduct.Styles";
import React, { Component } from "react";
import { CartItemType, EachProductType } from "../../typescript/Types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addToCart, cartDecrement, cartIncrement, removeCartItem } from "../../redux/reducers/CartSlice";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { connect } from "react-redux";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { deleteProduct, toggleModalReducer, productToBeEditInModal } from "../../redux/reducers/ProductsSlice";

interface MyProps {
  eachProduct: EachProductType;
  addCartItem: (payload: CartItemType | EachProductType) => void;
  cartDecrement: (productId: number) => void;
  cartIncrement: (productId: number) => void;
  removeCartItem: (productId: number) => void;
  cartProductsList: CartItemType[],
  makeModalOpen: (modalOpen: boolean) => void;
  deleteProduct: (productId: string) => void;
  productToBeEdited: EachProductType | null;
  productToBeEditInModal: (editProduct: EachProductType) => void;
}

class EachProduct extends Component<MyProps, {}> {



  removeFromCartButtonEventHandler = (itemId: number) => {
    const { eachProduct, cartProductsList } = this.props;
    const cartProduct = cartProductsList.find(eachCartProduct => eachCartProduct.id === eachProduct.id)
    if (cartProduct?.quantity === 1) this.props.removeCartItem(itemId);
    else this.props.cartDecrement(itemId);
  };


  addToCartButtonEventHandler = (eachProduct: CartItemType | EachProductType) => {
    this.props.addCartItem(eachProduct);
  };

  plusIconEventHandler = (productId: number) => {
    this.props.cartIncrement(productId)
  }

  editProductHandler = (editProduct: EachProductType) => {
    this.props.makeModalOpen(true);
    this.props.productToBeEditInModal(editProduct);
  }

  deleteProductHandler = (productId: number) => {
    this.props.deleteProduct(productId.toString())
  }

  render() {
    const { eachProduct, cartProductsList } = this.props;
    const cartProduct = cartProductsList.find(eachCartProduct => eachCartProduct.id === eachProduct.id)

    return (
      <Card sx={eachProductStyles.cardContainer}>
        <CardMedia
          sx={{
            height: { xs: "195px", sm: "215px", md: "233px", lg: "270px" },
            borderRadius: "6px",
          }}
          image={typeof eachProduct.image === 'string' ? eachProduct.image : ''}
          title="Products"
        />
        <CardContent sx={eachProductStyles.cardContent}>
          <Typography component="h2" sx={eachProductStyles.text1}>
            {eachProduct.title}
          </Typography>
          <Typography component="h3" sx={eachProductStyles.text2}>
            {eachProduct.category}
          </Typography>
          <Typography component="p" sx={eachProductStyles.descriptionText}>
            {eachProduct.description}
          </Typography>
          <Box sx={eachProductStyles.cardBodyChildContainer1}>
            <Typography component="p" sx={eachProductStyles.text3}>
              Rs {eachProduct.price}
            </Typography>
            <Box sx={eachProductStyles.cardBodyChildContainer2}>
              <Rating
                name="read-only"
                value={+eachProduct.rating.rate}
                sx={eachProductStyles.rating}
                readOnly
              />
              <Typography variant="body1" sx={eachProductStyles.text4}>
                {eachProduct.rating.rate}
              </Typography>
            </Box>
          </Box>
          <Box sx={eachProductStyles.cardBodyChildContainer3}>
            <Box sx={eachProductStyles.brandDiscountContainer}>
              <Typography component="p" sx={eachProductStyles.text6}>
                {eachProduct.rating.count}
              </Typography>
            </Box>
          </Box>
          {cartProduct && cartProduct.quantity > 0 ? (
            <Box>
              <Stack direction={"row"} alignItems={"center"}>
                <Button size="small">
                  <RemoveIcon
                    onClick={() =>
                      this.removeFromCartButtonEventHandler(eachProduct.id)
                    }
                  />
                </Button>
                <Typography>{cartProduct.quantity}</Typography>
                <Button size="small">
                  <AddIcon
                    onClick={() => this.plusIconEventHandler(eachProduct.id)}
                  />
                </Button>
              </Stack>
            </Box>
          ) : (
            <Box>
              <Button
                sx={eachProductStyles.addToCartBtn}
                startIcon={
                  <ShoppingCartIcon sx={eachProductStyles.startIcon} />
                }
                onClick={() => this.addToCartButtonEventHandler(eachProduct)}
              >
                ADD TO CART
              </Button>
            </Box>
          )}
          <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <EditOutlinedIcon onClick={() => this.editProductHandler(eachProduct)} sx={{ cursor: "pointer" }} />
            <DeleteOutlinedIcon onClick={() => this.deleteProductHandler(eachProduct.id)} sx={{ cursor: "pointer" }} />
          </Stack>
        </CardContent>
      </Card>
    );
  }
}



const mapStateToProps = (state: RootState) => ({
  cartProductsList: state.cartSlice.cartProducts,
  productToBeEdited: state.productsSlice.productToBeEdited
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addCartItem: (obj: CartItemType | EachProductType) => {
    dispatch(addToCart(obj));
  },
  cartDecrement: (productId: number) => {
    dispatch(cartDecrement(productId))
  },
  cartIncrement: (productId: number) => {
    dispatch(cartIncrement(productId))
  },
  removeCartItem: (productId: number) => {
    dispatch(removeCartItem(productId))
  },
  makeModalOpen: (modalOpen: boolean) => {
    dispatch(toggleModalReducer(modalOpen))
  },
  productToBeEditInModal: (editProduct: EachProductType) => {
    dispatch(productToBeEditInModal(editProduct));
  },
  deleteProduct: (productId: string) => {
    dispatch(deleteProduct(productId))
  },
})


export default connect(mapStateToProps, mapDispatchToProps)(EachProduct)