import { Box, Typography } from "@mui/material"
import GoogleIcon from '@mui/icons-material/Google';
import loginStyles from "./Login.Styles";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/Firebase";
import { Component } from "react";
import withRouter from "../../hoc/Hoc";
// import { useNavigate } from "react-router-dom";



// const Login = () => {
//     const provider = new GoogleAuthProvider();
//     const auth = getAuth(app);
// const navigate = useNavigate();


//     const signInWithGoogle = () => {
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 const user = result.user;
                    // navigate("/");
//               //  console.log("user", user);
//             }).catch((error) => {
//                 const errorCode = error.code;
//                // console.log(errorCode);
//             });
//     }

//     return (
//         <Box sx={loginStyles.mainContainer}>
//             <Typography sx={loginStyles.loginText}>Login</Typography>
//             <Box sx={loginStyles.googleContainer} onClick={signInWithGoogle}>
//                 <GoogleIcon sx={loginStyles.googleIcon} />
//                 <Typography sx={loginStyles.signInWithGoogleText}>Sign in with Google</Typography>
//             </Box>
//         </Box>
//     )
// }


// export default Login

interface LoginProps {
    navigate: (path: string) => void
}

interface LoginState { }

class Login extends Component<LoginProps, LoginState> {
    private provider: GoogleAuthProvider;
    private auth: ReturnType<typeof getAuth>;

    constructor(props: LoginProps) {
        super(props);
        this.provider = new GoogleAuthProvider();
        this.auth = getAuth(app);
    }

    signInWithGoogle = () => {
        signInWithPopup(this.auth, this.provider)
            .then((result) => {
                const user = result.user;
                console.log("user", user);
                this.props.navigate("/")

            })
            .catch((error) => {
                // const errorCode = error.code;
            });
    }

    render() {
        return (
            <Box sx={loginStyles.mainContainer}>
                <Typography sx={loginStyles.loginText}>Login</Typography>
                <Box sx={loginStyles.googleContainer} onClick={this.signInWithGoogle}>
                    <GoogleIcon sx={loginStyles.googleIcon} />
                    <Typography sx={loginStyles.signInWithGoogleText}>Sign in with Google</Typography>
                </Box>
            </Box>
        );
    }
}


export default withRouter(Login);