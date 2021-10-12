import React from 'react';
import { withStyles } from "@material-ui/styles";
import styles from "./ModalAddTodo.styles";

const Modal = (props) => {
  const { id = 'modal', onClose = () => {}, children, classes } = props;
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <div id={id} className={classes.modal} onClick={handleOutsideClick}>
      <div className={classes.container}>
        <button className={classes.close} onClick={onClose} />
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Modal);