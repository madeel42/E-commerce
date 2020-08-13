import React,{useState} from "react";
import { Drawer, Button } from "antd";
import classes from "./drawer.module.css";
// import img1 from "./../productpart/assets/img1.jpg";
import "./drawerCustom.css";
import { ReactComponent as Bag } from "./assets/bag.svg";
// import { useEffect } from "react";
const DrawerComponent = (props) => {
  const {
    draweritem,
    setDraweritem,
    itemNumber,
    setitemNumber,
    counter,
    setisActive,
    isActive,
    Draweritem,
    decrementFun,
    setdrawercallback,
  } = props;
  console.log(counter);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const itemDel = (item, itemIndex) => {
    console.log(itemIndex, " drwer itemIndex");
    let fullarr = [...draweritem];
    let existingItem = fullarr.find((cartItem) => cartItem.id === item.id);
    // let v = existingItem  ?( existingItem.counter == 1 ) : ""
    if(existingItem){
      existingItem.counter = 1
    }
    console.log(existingItem);
    // if(existingItem.counter <= 0){
    //   fullarr = fullarr.filter(item1 => item1.id !== item.id)
    // }
    // setDraweritem(fullarr)
    let filterItem = draweritem
      ? draweritem.filter((item1, index) => {
          console.log(index,item1.counter);
          return index !== itemIndex ;
        })
      : "";
      console.log(filterItem)
    let a = isActive;
    a[item.id] = false;
    console.log(a);
    let itemNumberDeccrement =
      (itemNumber ? itemNumber : 0) > 0 ? itemNumber - 1 : itemNumber;
    setDraweritem(filterItem,fullarr);
    setitemNumber(itemNumberDeccrement);
    setisActive(a);
  };
  // const increment = (item,index) => {
  // const newCount = Object.assign(draweritem, {
  //   ...draweritem,
  //   [index]: { ...draweritem[index], counter: draweritem[index] ? draweritem[index].counter + 1 :""  }
  // });
  // console.log(newCount)
  // }

  // const decrement = (item, itemIndex) => {
  //   console.log(counter);
    // let counterdcrement = item.counter ? item.counter : "";
    // let c = counterdcrement > 1 ? counterdcrement - 1 : counterdcrement
    // setcounter(c);
    // console.log(draweritem);
    // if(item.counter ? item.counter === 1 : item.counter){
    //   let filterItem = draweritem
    //   ? draweritem.filter((item1, index) => {
    //       console.log(index);
    //       return index !== itemIndex;
    //     })
    //   : "";
    //   let a = isActive;
    //   a[item.id] = false;
    //   let itemNumberDeccrement =
    //   (itemNumber ? itemNumber : 0) > 0 ? itemNumber - 1 : itemNumber;

    //   setisActive(a);
    //   setitemNumber(itemNumberDeccrement);
    //   setDraweritem(filterItem);
    // }
  // };
const total = draweritem ? draweritem.reduce((pre,cur)=>{
  return console.log(pre,"pre" , cur,"curr" ) || pre + (cur.counter * parseInt(cur.price))
},0):""
console.log(total)
  console.log(draweritem, "cdcdcdcdccs");
  return (
    <>
      <Button type="primary" className={classes.modelBtn} onClick={showDrawer}>
        <span className={classes.MainSpan}>
          <span className={classes.firstSpan}>
            <span>
              <Bag />
            </span>
            {itemNumber ? itemNumber : 0} item
          </span>
          <span className={classes.secondSpan}>{total} $</span>
        </span>
      </Button>
      <Drawer
        title={
          <div className={classes.titleDiv}>
            {" "}
            <div>
              <Bag />
            </div>
            <div className={classes.Itemdiv}>
              {itemNumber ? itemNumber : 0} Item
            </div>
          </div>
        }
        closable={true}
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        {draweritem
          ? draweritem.map((item, index) => {
            setdrawercallback(item)
              // itemPrice = parseInt(item.price);
              // itemCounter = item.counter;
              return (
                
                <div className={classes.mainDivWrapper}>
                  <div className={classes.mainDiv}>
                    <div className={classes.itemmainWrapper}>
                      <div className={classes.itemBox}>
                        <div className={classes.counterBtnStyle}>
                          <button
                            className={classes.itemPlusbuttonStyle}
                            onClick={() => Draweritem(item, index)}
                          >
                            +
                          </button>
                          <span>{item ? item.counter : item.counter}</span>
                          <button
                            className={classes.itemMinusbuttonStyle}
                            onClick={() => {
                              decrementFun(item, index);
                            }}
                          >
                            -
                          </button>
                        </div>
                        <img
                          src={item.image1}
                          className={classes.itemBoxImg}
                          alt=""
                        />
                        <div className={classes.itemInformation}>
                          <span className={classes.itemNameStyle}>
                            {item.title}
                          </span>
                          <span className={classes.itemPriceStyle}>
                            {item.price}
                          </span>
                          <span className={classes.itemNumberMultiple}>
                            {item ? item.counter : item.counter} x {item.price}
                          </span>
                        </div>
                        <span className={classes.itemTotalPrice}>
                          {parseInt(item.price) * item.counter}$
                        </span>
                        <button
                          className={classes.listCrossButton}
                          onClick={() => itemDel(item, index)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}

        <div className={classes.cartStyleCheckOutWraper}>
          <span className={classes.checkoutBox}>
            {/* <span> */}
            <button className={classes.questionButton}>
              Do you have a voucher?
            </button>
          </span>
          <button className={classes.checkOutbutton}>
            <span className={classes.checkoutText}> Checkout</span>{" "}
            <span className={classes.checkoutPrice}>
            {total}$
              {/* {itemPrice * itemCounter}$ */}
            </span>
          </button>
          {/* </span> */}
        </div>
      </Drawer>
    </>
  );
};
export default DrawerComponent;
