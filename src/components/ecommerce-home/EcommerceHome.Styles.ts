const homeStyles = {
  homeContainer: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#D2E4DD",
    paddingTop: "30px",
  },

  homeChildContainer: {
    width: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    // border: "2px solid green",
  },

  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // border: "2px solid red",
  },

  shopText: {
    fontfamily: "Roboto",
    fontSize: { xs: "30px", sm: "40px" },
    color: "#2E3542",
    fontWeight: "500",
  },

  cartBtnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "25px",
  },

  cartShopBtn: {
    color: "black",
    gap: "6px",
  },

  logoutBtn: {
    backgroundColor: "#4F5BB1 !important",
    textTransform: "capitaliZe",
    color: "white",
    padding: "6px 16px",
  },

  horizontalLine: {
    width: "100%",
    border: "1px solid #2E3542",
  },

  homeHeader: {
    // border: "1px solid green",
  },

  showingResultsText: {
    fontfamily: "Roboto",
    fontSize: { xs: "15px", sm: "20px" },
    color: "#2E3542",
    fontWeight: "500",
  },

  unorderedList: {
    listStyleType: "none",
    margin: "0",
    padding: "0",
    // border: "1px solid green",
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",
      xl: "repeat(4, 1fr)",
    },
    gridGap: { xs: "15px", md: "20px" },
    marginTop: "20px",
  },

  spanElLimit: {
    color: "green",
  },

  loaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // height: "800px",
    width: "100%",
    // border: "5px solid green",
    flexGrow: "1",
    height: "780px",
  },

  failureContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // height: "",
    flexGrow: "1",
    height: "780px",
    // border: "5px solid green",
  },

  apiErrorMsg: {
    fontfamily: "Roboto",
    fontSize: { xs: "24px", sm: "33px" },
    color: "#2E3542",
    fontWeight: "500",
  },
};

export default homeStyles;
