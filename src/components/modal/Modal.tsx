import {
    Box,
    Button,
    Modal,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { Component } from "react";
import modalStyles from "./Modal.Styles";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { EachProductType } from "../../typescript/Types";
import { addProduct, toggleModalReducer, updateProduct } from "../../redux/reducers/ProductsSlice";
import withRouter from "../../hoc/Hoc";
import { connect } from "react-redux";

interface IState {
    productTitle: string;
    productPrice: string | number;
    productDescription: string;
    productCategory: string;
    productRating: string | number;
    productImage: string;
    [x: string]: string | number;
}

interface Iprops {
    productToBeEdit: EachProductType | null;
    addProduct: (addedProduct: EachProductType) => void;
    updateProduct: (editedProduct: EachProductType) => void;
    makeModalClose: (modalClose: boolean) => void;
    isModalOpen: boolean;
    productsList: EachProductType[];
}

class ModalComponent extends Component<Iprops, IState> {
    constructor(props: Iprops) {
        super(props)
        console.log("this.props.productToBeEdit", this.props.productToBeEdit)
        this.state = {
            productTitle: this.props.productToBeEdit ? this.props.productToBeEdit.title : "",
            productPrice: this.props.productToBeEdit ? this.props.productToBeEdit.price : "",
            productDescription: this.props.productToBeEdit ? this.props.productToBeEdit.description : "",
            productCategory: this.props.productToBeEdit ? this.props.productToBeEdit.category : "",
            productRating: this.props.productToBeEdit ? this.props.productToBeEdit.rating.rate : "",
            productImage: this.props.productToBeEdit ? this.props.productToBeEdit.image : "",
        }
    }

    handleClose = () => {
        this.props.makeModalClose(false);
    }

    setImageDetails = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files?.[0];
        if (files) {
            const reader = new FileReader();
            reader.onloadend = () => {
                this.setState({ productImage: reader.result as string });
            };
            reader.readAsDataURL(files);
        }
    };

    handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleAddClick = () => {
        const { productTitle, productPrice, productCategory, productDescription, productImage, productRating } = this.state;
        const newObj = {
            id: this.props.productsList.length + 1,
            title: productTitle,
            price: +productPrice,
            description: productDescription,
            category: productCategory,
            image: productImage,
            rating: {
                rate: productRating,
                count: 120,
            },
        }
        this.props.addProduct(newObj);
        this.handleClose();
    }

    handleEditClick = () => {
        const { productTitle, productPrice, productCategory, productDescription, productImage, productRating } = this.state;
        const { productToBeEdit } = this.props as { productToBeEdit: EachProductType };
        const newObj: EachProductType = {
            id: productToBeEdit.id,
            title: productTitle,
            price: +productPrice,
            description: productDescription,
            category: productCategory,
            image: productImage,
            rating: {
                rate: +productRating,
                count: 120,
            },
        }
        this.props.updateProduct(newObj);
        this.handleClose();
    }

    render() {
        const { isModalOpen, productToBeEdit } = this.props;
        const { productTitle, productPrice, productCategory, productDescription, productImage, productRating } = this.state;

        const addOrUpdate = productToBeEdit ? "Update" : "Add";

        return (
            <Modal open={isModalOpen} onClose={this.handleClose}>
                <Box sx={modalStyles.modalStyles}>
                    <Typography variant="h5" sx={modalStyles.addProduct}>{addOrUpdate} product Details</Typography>
                    <Box sx={modalStyles.imgContent}>
                        <Stack sx={modalStyles.imgContainer}>
                            <Box
                                component="img"
                                src={productImage}
                                sx={modalStyles.img}
                                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) =>
                                ((e.target as HTMLImageElement).src =
                                    "https://assets.architecturaldigest.in/photos/60083e76274aca243711c3a4/4:3/w_1024,h_768,c_limit/ghaziabad-uttar-pradesh-homes-photos-1366x768.jpg")
                                }
                            />
                            <Box
                                component="input"
                                type="file"
                                onChange={this.setImageDetails}
                                accept="image/*"
                                name="profilePhoto"
                                id="imageupload"
                            />
                        </Stack>
                    </Box>
                    <Box sx={modalStyles.inputStack}>
                        <Stack>
                            <Box component="label" htmlFor="productTitle" sx={modalStyles.heading}>product title</Box>
                            <TextField
                                sx={modalStyles.input_container}
                                placeholder="Enter Product Title"
                                name="productTitle"
                                id="productTitle"
                                value={productTitle}
                                onChange={this.handleInputChange}
                            />
                        </Stack>
                        <Stack>
                            <Box component="label" htmlFor="productCategory" sx={modalStyles.heading}>product category</Box>
                            <TextField
                                sx={modalStyles.input_container}
                                placeholder="Enter Product Category"
                                name="productCategory"
                                id="productCategory"
                                value={productCategory}
                                onChange={this.handleInputChange}
                            />
                        </Stack>

                        <Stack>
                            <Box component="label" htmlFor="productPrice" sx={modalStyles.heading}>product price</Box>
                            <TextField
                                sx={modalStyles.input_container}
                                name="productPrice"
                                id="productPrice"
                                value={productPrice}
                                onChange={this.handleInputChange}
                                placeholder="Enter Product Price"
                                type="number"
                            />
                        </Stack>
                        <Stack>
                            <Box component="label" htmlFor="productDescription" sx={modalStyles.heading}>product description</Box>
                            <TextField
                                placeholder="Enter Product Description"
                                name="productDescription"
                                id="productDescription"
                                value={productDescription}
                                onChange={this.handleInputChange}
                                sx={modalStyles.input_container}
                            />
                        </Stack>
                        <Stack>
                            <Box component="label" htmlFor="productRating" sx={modalStyles.heading}>product rating</Box>
                            <TextField
                                placeholder="Enter Product Rating"
                                name="productRating"
                                id="productRating"
                                value={productRating}
                                onChange={this.handleInputChange}
                                sx={modalStyles.input_container}
                                type="number"
                            />
                        </Stack>
                        <Stack direction={"row"} sx={modalStyles.buttons}>
                            <Button
                                sx={modalStyles.cancelButton}
                                variant="outlined"
                                onClick={this.handleClose}
                            >
                                cancel
                            </Button>
                            {addOrUpdate === "Add" && (
                                <Button sx={modalStyles.addButton} onClick={this.handleAddClick}>
                                    Add
                                </Button>
                            )}
                            {addOrUpdate === "Update" && (
                                <Button sx={modalStyles.addButton} onClick={this.handleEditClick}>
                                    Update
                                </Button>
                            )}
                        </Stack>
                    </Box>
                </Box>
            </Modal>
        )
    }
};

const mapStateToProps = (state: RootState) => ({
    productToBeEdit: state.productsSlice.productToBeEdited,
    isModalOpen: state.productsSlice.isModalOpen,
    productsList: state.productsSlice.products
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    addProduct: (addedProduct: EachProductType) => { dispatch(addProduct(addedProduct)) },
    updateProduct: (editedProduct: EachProductType) => { dispatch(updateProduct(editedProduct)) },
    makeModalClose: (modalClose: boolean) => { dispatch(toggleModalReducer(modalClose)) }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalComponent));
