import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/Toolbar'
import {Link} from "react-router-dom";
import logo from './../Assets/logo.svg';


export default function ButtonAppBar() {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>

        <Link to="/webdev-starter-materialUI/home">
        <IconButton>
            <img src={logo} className="App-logo" alt="logo" />
        </IconButton>
        </Link>

          Title Goes Here
            
        </Toolbar>
      </AppBar>
    </div>
  );
}
