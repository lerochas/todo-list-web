/* eslint-disable import/no-anonymous-default-export */
export default (theme) => {
  return {
    root: {},
    text: {
      color: "#363f5f",
      paddingBottom: "2px",
      paddingLeft: "25px",
      fontSize: "16px",
    },
    check: {
      marginLeft: "50%",
      color: "#009900",
    },
    close: {
      marginLeft: "50%",
      color: "#b41414",
    },
    icon: {
      color: "#BFBFBF !important",
    },
    textField: {
      width: "65%",
      margin: "3px",
    },
    label: {
      marginLeft: "2px",
    },
    btnSave: {
      margin: "2px",
      backgroundColor: "#74CF76",
      "&:hover": {
        backgroundColor: "#74CF76",
        color: "#fff",
      },
    },
    btnCancel: {
      margin: "2px",
      backgroundColor: "#FF6B6B",
      "&:hover": {
        backgroundColor: "#FF6B6B",
        color: "#fff",
      },
    }
  };
};
