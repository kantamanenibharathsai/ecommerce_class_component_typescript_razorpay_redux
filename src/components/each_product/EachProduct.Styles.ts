const eachProductStyles = {
  cardContainer: {
    // border: "2px solid red",
    backgroundColor: "white !important",
    borderRadius: "6px",
    padding: "5px",
    boxSizing: "border-box",
    width: { xs: "100%", sm: "68%", md: "100%" },
    // boxShadow: "0.1px 0px 0px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    margin: { xs: "auto", sm: "auto", md: "0px" },
    // marginBottom: { xs: "0px", sm: "20px", md: "10px" },
    cursor: "pointer",
    minHeight: "540px",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: { xs: "11px", sm: "16px" },
    padding: "2px",
    // border: "2px solid green",
  },

  text1: {
    fontSize: { xs: "14px", sm: "16px" },
    fontWeight: "300",
    color: "black",
    fontFamily: "Roboto",
    opacity: 0.8,
    // border: "1px solid black",
    marginTop: "8px",
  },

  text2: {
    fontSize: { xs: "18px", sm: "20px" },
    fontWeight: "600",
    color: "black",
    fontFamily: "Roboto",
    // border: "1px solid black",
    // marginTop: "12px",
    opacity: 0.7,
    lineHeight: "16px",
  },

  descriptionText: {
    fontSize: { xs: "14px", sm: "15px" },
    fontWeight: "300",
    color: "black",
    fontFamily: "Roboto",
    // marginTop: "12px",
    lineHeight: "18px",
  },

  cardBodyChildContainer1: {
    display: "flex",
    alignItems: "center",
    // border: "1px solid black",
    justifyContent: "space-between",
    // marginTop: "18px",
  },

  text3: {
    fontSize: { xs: "17px", sm: "19px" },
    fontWeight: "500",
    color: "#ff5c33",
    fontFamily: "Roboto",
    // border: "1px solid black",
  },

  cardBodyChildContainer2: {
    display: "flex",
    alignItems: "center",
    // border: "1px solid black",
    gap: "6px",
  },

  rating: {
    fontSize: "1rem",
    marginRight: "5px",
  },

  text4: {
    fontSize: { xs: "16px", sm: "18px" },
    fontWeight: "500",
    color: "black",
    fontFamily: "Roboto",
    // border: "1px solid black",
  },

  cardBodyChildContainer3: {
    // border: "1px solid black",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "strech", sm: "center" },
    justifyContent: { sm: "space-between" },
    // marginTop: "17px",
    gap: { xs: "13px", sm: "0px" },
  },

  cardBodyChildContainer4: {
    // border: "1px solid black",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "11px",
    justifyContent: "space-between",
  },

  brandDiscountContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: { xs: "space-between", sm: "flex-start" },
    gap: { xs: "10px", sm: "10px", lg: "5px" },
    alignItems: "center",
  },

  text5: {
    fontSize: "13px",
    fontWeight: "500",
    color: "black",
    fontFamily: "Roboto",
    // border: "1px solid black",
    opacity: 0.8,
  },

  smallImagesContainer: {
    display: "flex",
    alignitems: "center",
    gap: "10px",
  },

  cardSmallImg: {
    width: { xs: "42px", md: "38px" },
    height: { xs: "42px", md: "38px" },
    borderRadius: "3px",
    opacity: 0.8,
  },

  text6: {
    fontSize: "13px",
    fontWeight: "500",
    color: "black",
    fontFamily: "Roboto",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "grey",
    padding: "3px 9px",
    opacity: 0.6,
  },

  addToCartBtn: {
    backgroundColor: "#ff9f00",
    border: "none",
    color: "white",
    textAlign: "center",
    padding: "5px 15px",
    fontWeight: "550",
    "&: hover": {
      border: "none",
      color: "white",
      backgroundColor: "#ff9f00",
    },
  },

  startIcon: {
    color: "white",
  },
};

export default eachProductStyles;
