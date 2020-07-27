import React from "react";
import classes from "./navbar.module.css";
import AppLogo from "./../../assets/app-logo.png";
import MenuBar from "./../../assets/menu-bars-icon.png";
import { useState } from "react";
// import { ReactComponent as PicBazar } from "./../../assets/picbazar-logo.svg";
const Navbar = () => {
  const [show,setshow] = useState(false)
  const showdrawer = () => {
    setshow(true)
  }
  const close = () => {
    setshow(false)
  }
  return (
    <div className={classes.mainNavbardiv}>
      <img src={AppLogo} className={classes.applogo} alt="" />
      <img src={MenuBar} onClick={showdrawer} className={classes.MenuBar} alt="" />
      <ul className={show ? classes.ulListShow : classes.ulList}>
       <button className={classes.ulListClosebtn} onClick={close}>x</button>
        <li>Offer</li>
        <li>Need Help</li>
        <li>About</li>
        <li className={classes.checkout}>Checkout</li>
        <li>
          <button>Join</button>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
