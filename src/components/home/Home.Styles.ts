const todoStyles = {
  todosMainContainer: {
    backgroundColor: "#f9fbfe",
    height: "100vh",
  },

  todosChildContainer: {
    width: { xs: "95%", sm: "90%", md: "85%", lg: "80%", xl: "60%" },
    margin: "auto",
    height: "auto",
    pt: { xs: "13px", xl: "20px" },
  },

  todosHeading: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: { xs: "25px", sm: "34px", md: "34px", lg: "28px", xl: "38px" },
    fontWeight: "500",
    marginBottom: { xs: "18px", xl: "20px" },
  },

  createTaskContainer: {
    width: "100%",
    margin: { md: "auto" },
  },

  createTaskHeading: {
    fontFamily: "Roboto",
    fontSize: { xs: "23px", sm: "30px", lg: "26px" },
    fontWeight: "700",
  },

  createTaskHeadingSubpart: {
    fontFamily: "Roboto",
    fontSize: { xs: "23px", sm: "32px", lg: "26px" },
    fontWeight: "500",
    ml: 1.5,
  },

  todoUserInput: {
    backgroundColor: "white",
    width: "100%",
    marginTop: "10px",
    fontSize: "11px",
    "& .MuiInputBase-input": {
      padding: "0px",
      px: "18px",
      height: "48px",
    },
    input: {
      fontSize: "14px",
      "&::placeholder": {
        color: "green",
        fontSize: "14px",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid #9e896a",
        borderRadius: "5px",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #9e896a",
      },
      "&:hover fieldset": {
        borderColor: "#9e896a",
      },
    },
  },

  todoButton: {
    color: "white",
    backgroundColor: "#4c63b6",
    fontFamily: "Roboto",
    fontSize: { xs: "12px", md: "15px" },
    borderWidth: "0",
    borderRadius: "4px",
    marginTop: "18px",
    marginBottom: "35px",
    paddingTop: "3px",
    paddingBottom: "3px",
    paddingRight: "25px",
    paddingLeft: "25px",
    outline: "none",
    cursor: "pointer",
    "&:hover": {
      color: "white",
      backgroundColor: "#4c63b6",
      fontFamily: "Roboto",
      fontSize: { xs: "12px", md: "15px" },
      borderWidth: "0",
      borderRadius: "4px",
      marginTop: "18px",
      marginBottom: "35px",
      paddingTop: "3px",
      paddingBottom: "3px",
      paddingRight: "25px",
      paddingLeft: "25px",
      outline: "none",
      cursor: "pointer",
    },
  },

  myTasksContainer: {},

  unorderedList: {
    padding: "0",
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "10px",
    height: { xs: "505px", sm: "472px", md: "475px", lg: "530px" },
    overflowY: "auto",
  },

  errorMsg: {
    fontSize: "11px",
    color: "red",
    paddingTop: "5px",
  },

  updateBtn: {
    backgroundColor: "#51e40d !important",
  },

  saveBtn: {
    color: "white",
    backgroundColor: "#4c63b6",
    fontFamily: "Roboto",
    fontSize: { xs: "12px", md: "15px" },
    borderWidth: "0",
    borderRadius: "4px",
    marginTop: "10px",
    marginBottom: "35px",
    paddingTop: "3px",
    paddingBottom: "3px",
    paddingRight: "25px",
    paddingLeft: "25px",
    outline: "none",
    cursor: "pointer",
    "&:hover": {
      color: "white",
      backgroundColor: "#4c63b6",
      fontFamily: "Roboto",
      fontSize: { xs: "12px", md: "15px" },
      borderWidth: "0",
      borderRadius: "4px",
      marginTop: "10px",
      marginBottom: "35px",
      paddingTop: "3px",
      paddingBottom: "3px",
      paddingRight: "25px",
      paddingLeft: "25px",
      outline: "none",
      cursor: "pointer",
    },
  },
};

export default todoStyles;
