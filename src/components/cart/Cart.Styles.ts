const cartStyles = {
  mainContainer: {
    height: "100vh",
    width: "100%",
    // border: "3px solid green",
    py: "10px",
  },

  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: { xs: "96%", sm: "90%", md: "85%" },
    margin: "auto",
    // border: "2px solid red",
    border: "1px solid black",
    borderRadius: "10px",
    px: "15px",
    py: "13px"
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

  childContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "calc(100vh - 100px)",
    pt: "100px",
    py: "30px",
    gap: "30px",
    // border: "2px solid red",
  },

  cartContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  totalContainer: {
    border: "1px solid black",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    alignSelf: "center",
    height: "70px",
    px: "20px",
  },

  cartPageParentContainer: {
    height: "calc(100vh - 70px)",
  },

  cartEmptyContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    height: "100%",
  },

  cartEmptyImage: {
    width: "250px",
    height: "250px",
  },

  cartTextButtonContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    alignItems: "center",
    gap: "16px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    borderRadius: "10px",
    width: { xs: "80%", sm: "auto" },
  },

  cartEmptyText: {
    fontSize: "20px",
    color: "black",
    letterSpacing: "2px",
  },

  mustAddItemsText: {
    fontSize: "13px",
    color: "black",
    textAlign: { xs: "center", sm: "flex-start" },
  },

  returnToShopBtn: {
    bgcolor: "red",
    borderRadius: "30px",
    px: "20px",
    alignSelf: "center",
    "&:hover": {
      bgcolor: "red",
    },
  },
};

export default cartStyles;
