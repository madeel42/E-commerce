import React, { useEffect } from "react";
import classes from "./products.module.css";
import CardComponent from "./cardComponent";
import data from "./data";
import { useState } from "react";
const cardperShow = 10;
let arrayForHoldingCards = [];
const Products = () => {
  const [cardToShow, setcardToShow] = useState([]);
  const [next, setnext] = useState(15);
  // const loopWithSlice = (start, end) => {
  //   const sliceCard = data.slice(start, end);
  //   arrayForHoldingCards = [...arrayForHoldingCards, ...sliceCard];
  //   setcardToShow(arrayForHoldingCards);
  // };
  // useEffect(() => {
  //     loopWithSlice(0, cardperShow)
  // }, []);
  const handleShowMorePosts = () => {
    setnext(next + 3);
  };
  // const handleShowMorePosts = () => {
  //   loopWithSlice(next, next + cardperShow);
  //   setnext(next + cardperShow);
  // };
  return (
    <div className={classes.productContent}>
      <CardComponent cardToShow={data} setcardToShow={setcardToShow} visibleitem={next} />
      <div className={classes.loadMoreBtnDiv}>
        <button className={` ${next >= data.length ? classes.hideBtn : classes.loadMoreBtn}`} onClick={handleShowMorePosts}>
          {/* onClick={handleShowMorePosts} */}
          Load more
        </button>
      </div>
    </div>
  );
};
export default Products;
