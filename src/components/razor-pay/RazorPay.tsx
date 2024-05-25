import { useCallback } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../firebase/Firebase'
import razorPayStyles from "./RazorPay.Styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/Store";
import { CartItemType } from "../../typescript/Types";




const RazorPay = () => {
    const [Razorpay] = useRazorpay();
    const arrayOfCartProducts = useSelector((state: RootState) => state.cartSlice.cartProducts);
    const totalPrice = (arrayOfCartProducts: CartItemType[]) => arrayOfCartProducts.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0);


    const handlePayment = useCallback(() => {
        const options: RazorpayOptions = {
            key: 'rzp_test_LTWgGpWmSvUzaD',
            amount: `${(totalPrice(arrayOfCartProducts)) * 100}`,
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: '',
            handler: async (res: any) => {
                await setDoc(doc(db, "orderDetails", "orderid"), {
                    number: res
                });
            },
            prefill: {
                name: "Piyush Garg",
                email: "youremail@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzpay = new Razorpay(options);
        rzpay.open();
    }, [Razorpay]);

    return (
        <Box className="App">
            <Button onClick={handlePayment} variant="contained" sx={razorPayStyles.proceedToPayBtn}>proceed to pay</Button>
        </Box>
    );
}

export default RazorPay
