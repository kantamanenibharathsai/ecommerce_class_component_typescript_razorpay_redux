const loginStyles = {
  mainContainer: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "80px",
    justifyContent: "center",
    alignItems: "center",
  },

  loginText: {
    fontSize: "45px",
    fontWeight: "bold",
    letterSpacing: "3.5px",
  },

  googleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // width: "150px",
    padding: "20px 30px",
    gap: "20px",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  googleIcon: {
    width: "30px",
    height: "30px",
  },

  signInWithGoogleText: {
    fontSize: "17px",
  },
};

export default loginStyles;
