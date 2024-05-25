import { Box, Button, Stack, Typography } from "@mui/material";
import { Component } from "react";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { CartItemType, EachProductType } from "../../typescript/Types";
import { connect } from "react-redux";
import { apiStatusReducer, productToBeEditInModal, toggleModalReducer } from "../../redux/reducers/ProductsSlice";
import EachProduct from "../each_product/EachProduct";
import { ThreeDots as Loader } from "react-loader-spinner";
import homeStyles from "./EcommerceHome.Styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import withRouter from "../../hoc/Hoc";
import Modal from "../modal/Modal";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


interface Iprops {
    apiStatus: string,
    productsList: EachProductType[];
    cartProductsList: CartItemType[];
    navigate: (path: string) => void;
    setAPIStatus: (value: "INITIAL" | "SUCCESS" | "PENDING" | "REJECTED") => void;
    isModalOpened: boolean;
    makeModalOpen: (modalOpen: boolean) => void;
    productToBeEditInModal: (editProduct: null) => void;

}


class EcommerceHome extends Component<Iprops, {}> {
    private intervalId!: NodeJS.Timeout;


    componentDidMount(): void {
        this.props.setAPIStatus("PENDING")
        this.intervalId = setTimeout(() => {
            this.props.setAPIStatus("SUCCESS")
        }, 1500)
    }


    componentWillUnmount(): void {
        clearInterval(this.intervalId);
    }

    renderLoadingView = () => {
        return (
            <Box sx={homeStyles.loaderContainer}>
                <Loader color="#0b69ff" height={50} width={50} />
            </Box>
        );
    };


    renderProductsSuccessView = () => {
        const { productsList } = this.props;
        return (
            <>
                {productsList.length > 0 && (<Box component="ul" sx={homeStyles.unorderedList}>
                    {productsList.map((eachProduct) => (
                        <EachProduct key={eachProduct.id} eachProduct={eachProduct} />
                    ))}

                </Box>)}
                {productsList.length === 0 && (
                    <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} height={"80vh"}>
                        <Typography fontSize={"30px"} fontWeight={"800"}>No Products Found, Add Products</Typography>
                    </Stack>

                )}
            </>
        );
    };

    renderProductsFailureView = () => {
        return (
            <Box sx={homeStyles.failureContainer}>
                <Typography sx={homeStyles.apiErrorMsg}>apiErrorMsg</Typography>
            </Box>
        );
    };


    renderJSXBasedOnApiStatus = (): React.ReactNode => {
        switch (this.props.apiStatus) {
            case "SUCCESS":
                return this.renderProductsSuccessView();
            case "REJECTED":
                return this.renderProductsFailureView();
            default:
                return this.renderLoadingView();
        }
    };

    cartBtnHandler = () => {
        this.props.navigate("/cart")
    }

    handleAddIcon = () => {
        this.props.makeModalOpen(true);
        this.props.productToBeEditInModal(null);
    }


    renderNavbar = () => (
        <Box sx={homeStyles.headerContainer}>
            <Stack direction="row" alignItems={"center"} gap={"20px"}>
                <Typography component="h1" variant="h1" sx={homeStyles.shopText}>
                    Shop
                </Typography>
                <AddOutlinedIcon sx={{ cursor: "pointer" }} onClick={this.handleAddIcon} />
            </Stack>
            <Box sx={homeStyles.cartBtnContainer}>
                <Button sx={homeStyles.cartShopBtn} onClick={this.cartBtnHandler}>
                    <AddShoppingCartIcon sx={{ width: "40px", height: "40px" }} />
                    <Typography sx={{ color: "green", fontWeight: "800" }}>{this.props.cartProductsList.length}</Typography>
                </Button>
                <Button
                    sx={homeStyles.logoutBtn}
                    type="button"
                >
                    Logout
                </Button>
            </Box>
        </Box>
    )

    render() {
        return (
            <>
                <Box sx={homeStyles.homeContainer}>
                    <Box sx={homeStyles.homeChildContainer}>
                        {this.renderNavbar()}
                        <Box sx={homeStyles.horizontalLine} component="hr" />
                        <Box sx={homeStyles.homeHeader}>
                            <Typography component={"p"} sx={homeStyles.showingResultsText}>
                                Showing all{" "}
                                <Box sx={homeStyles.spanElLimit} component="span">
                                    {this.props.productsList.length}
                                </Box>{" "}
                                results
                            </Typography>
                        </Box>
                        {this.renderJSXBasedOnApiStatus()}
                    </Box>
                </Box>
                {this.props.isModalOpened && <Modal />}
            </>
        )
    }
}






const mapStateToProps = (state: RootState) => ({
    apiStatus: state.productsSlice.apiStatus,
    productsList: state.productsSlice.products,
    cartProductsList: state.cartSlice.cartProducts,
    isModalOpened: state.productsSlice.isModalOpen
});


const mapDispatchToProps = (dispatch: AppDispatch) => ({
    setAPIStatus: (value: "INITIAL" | "SUCCESS" | "PENDING" | "REJECTED") => { dispatch(apiStatusReducer(value)) },
    makeModalOpen: (modalOpen: boolean) => {
        dispatch(toggleModalReducer(modalOpen))
    },
    productToBeEditInModal: (editProduct: null) => {
        dispatch(productToBeEditInModal(editProduct));
    },
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EcommerceHome))