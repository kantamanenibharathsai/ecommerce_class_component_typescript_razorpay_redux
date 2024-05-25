import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import cartProductStyles from "./CartProduct.Styles";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { cartIncrement, cartDecrement, removeCartItem, addToCart } from "../../redux/reducers/CartSlice";
import "../../App.css"
import { CartItemType, EachProductType } from "../../typescript/Types";
import { connect } from "react-redux";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));


interface MyProps {
    addCartItem: (payload: CartItemType | EachProductType) => void;
    cartDecrement: (productId: number) => void;
    cartIncrement: (productId: number) => void;
    removeCartItem: (productId: number) => void;
    cartProductsList: CartItemType[],
}

interface IState {
    direction: string;
    key: number;
}


class CartTable extends React.Component<MyProps, IState> {
    state: IState = { direction: "", key: 0 }

    arrowUpwardIconEventHandler = (cartProduct: CartItemType) => {
        this.setState({ direction: "up", key: this.state.key + 1 });
        this.props.cartIncrement(cartProduct.id);
    }

    arrowDownwardIconEventHandler = (cartProduct: CartItemType) => {
        this.setState({ direction: "up", key: this.state.key - 1 });
        if (cartProduct.quantity === 1) this.props.removeCartItem(cartProduct.id);
        else this.props.cartDecrement(cartProduct.id);
    }

    render() {
        const arrayOfCartProducts = this.props.cartProductsList.filter(eachProduct => eachProduct.quantity > 0);

        return (
            <TableContainer component={Paper} sx={cartProductStyles.tableParentContainer}>
                <Table
                    sx={cartProductStyles.tableContainer}
                    aria-label="customized table"
                >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Product Name</StyledTableCell>
                            <StyledTableCell align="right">Product Category</StyledTableCell>
                            <StyledTableCell align="right">Product Rating</StyledTableCell>
                            <StyledTableCell align="right">Product Price</StyledTableCell>
                            <StyledTableCell align="right">Product Quantity</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {arrayOfCartProducts.map((eachRowCartProduct) => (
                            <StyledTableRow key={eachRowCartProduct.id}>
                                <StyledTableCell>
                                    {eachRowCartProduct.title}
                                </StyledTableCell>
                                <StyledTableCell align="right">{eachRowCartProduct.category}</StyledTableCell>
                                <StyledTableCell align="right">{eachRowCartProduct.rating.rate}</StyledTableCell>
                                <StyledTableCell align="right">{eachRowCartProduct.price}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Box sx={cartProductStyles.iconsNumberContainer}>
                                        <IconButton onClick={() => this.arrowUpwardIconEventHandler(eachRowCartProduct)} aria-label="arrow-upward-icon" size="small">
                                            <ArrowUpwardIcon />
                                        </IconButton>
                                        <Typography className={`count ${this.state.direction}`} key={this.state.key}>{eachRowCartProduct.quantity}</Typography>
                                        <IconButton onClick={() => this.arrowDownwardIconEventHandler(eachRowCartProduct)} aria-label="arrow-downward-icon" size="small">
                                            <ArrowDownwardIcon />
                                        </IconButton>
                                    </Box>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}


const mapStateToProps = (state: RootState) => ({
    cartProductsList: state.cartSlice.cartProducts,
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
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(CartTable)
