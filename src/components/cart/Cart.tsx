import { Box, Button, Stack, Typography } from "@mui/material";
import cartStyles from "./Cart.Styles";
import CartTable from "../../components/cart_product/CartProduct";
import { CartItemType, } from "../../typescript/Types";
import { RootState } from "../../redux/store/Store";
import { Component } from "react";
import { connect } from "react-redux";
import withRouter from "../../hoc/Hoc";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RazorPay from "../razor-pay/RazorPay";


interface MyProps {
    cartProductsList: CartItemType[],
    navigate: (path: string) => void
}

interface IState {
    isRazorPayOpened: boolean;
}


class Cart extends Component<MyProps, IState> {
    state: IState = { isRazorPayOpened: false };

    onClickReturnToShopBtnHandler = () => {
        this.props.navigate("/")
    }

    renderCartEmptyJSX = () => (
        <Box sx={cartStyles.cartEmptyContainer}>
            <Box component="img" src="https://thumbs.dreamstime.com/b/empty-cart-purchases-23379502.jpg" alt="cart-image" sx={cartStyles.cartEmptyImage} />
            <Box sx={cartStyles.cartTextButtonContainer}>
                <Typography sx={cartStyles.cartEmptyText}>Your Cart is Empty!</Typography>
                <Typography sx={cartStyles.mustAddItemsText}>Must add items on the cart before you proceed to check out.</Typography>
                <Button variant="contained" onClick={this.onClickReturnToShopBtnHandler} sx={cartStyles.returnToShopBtn}>Return To Shop</Button>
            </Box>
        </Box>
    )

    renderNavbar = () => (
        <Box sx={cartStyles.headerContainer}>
            <Typography component="h1" variant="h1" sx={cartStyles.shopText}>
                Shop
            </Typography>
            <Box sx={cartStyles.cartBtnContainer}>
                <Button sx={cartStyles.cartShopBtn} onClick={this.cartBtnHandler}>
                    <AddShoppingCartIcon sx={{ width: "40px", height: "40px" }} />
                    <Typography sx={{ color: "green", fontWeight: "800" }}>{this.props.cartProductsList.length}</Typography>
                </Button>
                <Button
                    sx={cartStyles.logoutBtn}
                    type="button"
                >
                    Logout
                </Button>
            </Box>
        </Box>
    )


    totalPrice = (arrayOfCartProducts: CartItemType[]) => this.props.cartProductsList.reduce((accumulator, currentCartObj) => accumulator + (currentCartObj.price * currentCartObj.quantity), 0);


    cartBtnHandler = () => {
        this.props.navigate("/cart")
    }

    proceedToPayHandler = () => {
        this.setState({ isRazorPayOpened: true });
    }

    render() {
        const { cartProductsList } = this.props;

        return (
            <Box sx={cartStyles.mainContainer}>
                {cartProductsList.length > 0 && this.renderNavbar()}
                {cartProductsList.length > 0 ? (
                    <>
                        <Box sx={cartStyles.childContainer}>
                            <Box sx={cartStyles.cartContainer}>
                                <CartTable />
                            </Box>
                            <Box sx={cartStyles.totalContainer}>
                                <Stack direction={"row"} alignItems={"center"} gap={"18px"}>
                                    <Typography>Total Price (RS)</Typography>
                                    <Typography>{this.totalPrice(cartProductsList)}</Typography>
                                </Stack>
                                <Button variant="contained" onClick={this.proceedToPayHandler}>Proceed To Pay</Button>
                            </Box>

                        </Box>
                        {this.state.isRazorPayOpened && (<RazorPay/>)}
                    </>) : (
                    <Box sx={cartStyles.cartPageParentContainer}>
                        {this.renderCartEmptyJSX()}
                    </Box>
                )}
            </Box>
        );
    }
}



const mapStateToProps = (state: RootState) => ({
    cartProductsList: state.cartSlice.cartProducts,
});


export default withRouter(connect(mapStateToProps, {})(Cart))