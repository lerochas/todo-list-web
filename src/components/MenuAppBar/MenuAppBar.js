import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { withStyles } from "@material-ui/core/styles";
import logo from '../../assets/ao-cubo-logo.webp';
import styles from './MenuAppBar.styles';

function ButtonAppBar(props) {
  const {classes} = props;

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.root}>
      <AppBar position="static">
        <Toolbar >
          <div className={classes.divLogo}>
           <img className={classes.logo} alt="" src={logo} sx={{flex: '1 1 auto'}}/>
          </div>
          <IconButton
            size="large"
            edge="end"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default withStyles(styles)(ButtonAppBar)