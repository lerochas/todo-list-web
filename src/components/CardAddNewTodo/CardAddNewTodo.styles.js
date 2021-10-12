/* eslint-disable import/no-anonymous-default-export */
export default (theme) => {
  return {
    root: {
     padding: "25px",
    },
    h2: {
      color: "#363f5f",
      marginTop: "10px",
      paddingLeft: "10px",
    },
    btn: {
      backgroundColor: "#00e6b8",
      color: "#363f5f",
      float: "right",
      
      "&:hover": {
      backgroundColor: "#11a7ca",
        color: "#fff",
      },
    },
    textField: {
      width: "97%",
      margin: "3px",
      paddingLeft: "25px",
    },
    label: {
      marginLeft: "25px",
    },
  };
};