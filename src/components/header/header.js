import React from "react";
import classes from "./header.module.css"
const Header = () => {
  return (
    <div className={classes.contentDiv}>
      <h1>Shop your designer dresses</h1>
      <p>
        Ready to wear dresses tailored for you from online. Hurry up while stock
        lasts.
      </p>
     <div className={classes.searchBoxWraper}>
         <span className={classes.serachSpan}>
             clothing
         </span>
         <div className={classes.searchbtnDiv}>
             <input type="text" placeholder="Search your products from here" className={classes.searchName} name="" id=""/>
             <button className={classes.searchButton}>Search</button>
         </div>
     </div>
    </div>
  );
};
export default Header;
