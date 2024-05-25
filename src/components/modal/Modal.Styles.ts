const modalStyles = {
  mainBox: { display: "flex" },
  appbar: {
    background: "#fff",
    color: "#000",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
  toolbar: { width: "96%", margin: "auto", px: 0 },
  homeText: { cursor: "pointer", flexGrow: 1, fontWeight: 600 },
  favIconBox: { mr: 3, cursor: "pointer" },
  accountBox: { alignItems: "center", display: "flex", gap: "10px" },
  nameText: { display: { xs: "none", sm: "flex" } },

  addButton: {
    bgcolor: "#163762",
    borderRadius: "10px",
    color: "white",
    mr: 1,
    "&: hover": {
      bgcolor: "#163762",
    },
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: "13px",
    px: "10px",
  },

  modalStyles: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { md: "65%", sm: "80%", xs: "95%", lg: "56%", xl: "50%" },
    bgcolor: "background.paper",
    textTransform: "capitalize",
    boxShadow: 24,
    borderRadius: "8px",
    p: { xs: "20px", sm: 4 },
    py: { xs: "30px", sm: "4" },
  },
  modalDivider: {
    px: 2,
    py: 1,
    borderBottomWidth: "2px",
  },
  cancelButton: {
    borderRadius: "15px",
    color: "#163762",
    border: "2px solid #163762",
    "&: hover": {
      borderRadius: "15px",
      color: "#163762",
      border: "2px solid #163762",
    },
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: "16px",
  },
  input_container: {
    mt: 1,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#AACCEB",
      },
      "&:hover fieldset": {
        border: "1px solid #AACCEB",
        bgcolor: "transparent",
        opacity: "1",
        color: "white",
      },
      "&.Mui-focused fieldset": {
        border: " 1px solid #AACCEB",
      },
    },
  },
  select: {
    color: "black",
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "#AACCEB",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#AACCEB",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#AACCEB",
    },
    ".MuiSvgIcon-root ": {
      fill: " #AACCE !important",
    },
  },
  heading: {
    fontSize: "16px",
    fontFamily:
      " -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Fira Sans', Ubuntu, Oxygen, 'Oxygen Sans', Cantarell, 'Droid Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Lucida Grande', Helvetica, Arial, sans-serif",
  },
  buttons: {
    mt: 2,
    gap: 1,
  },

  inputStack: {
    mt: 2,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  imgContainer: { flexDirection: "row", p: 2, gap: 3 },
  img: {
    border: "2px dotted black",
    height: "50px",
    width: "70px",
  },
  imgContent: {
    border: "1px solid black",
    mt: 1,
  },
  menu: {
    "& .MuiPaper-root": {
      boxShadow: "0px 0px 2px silver",
    },
  },

  addProduct: {
    fontSize: "17px",
    fontWeight: "700",
  },
};


export default modalStyles
