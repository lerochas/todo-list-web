/* eslint-disable import/no-anonymous-default-export */
export default (theme) => {
  return {
    root: {},
    btn: {
      backgroundColor: "#00005c",
      color: "#F5F5F5",
      
      "&:hover": {
      backgroundColor: "#00005c",
        color: "#00e6b8",
      },
    },
    btnPosition: {
      display: "flex",
      justifyContent: "center",
    }
  };
};