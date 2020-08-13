import React, { useEffect } from "react";
import { Card } from "antd";
import "antd/dist/antd.css";
import cardComclasses from "./cardsCom.module.css";
import "./cardsCustom.css";
import ModelComponent from "./cardsModel/cardsModel";
import DrawerCom from "../../Drawer/drawer";
import { ReactComponent as Cart } from "./cart/cartasset/cart-minus.svg";
import { Link } from "react-router-dom";
import classes from "./products.module.css";
import { useState } from "react";
import Item from "antd/lib/list/Item";
import {SearchContext} from './../../header/useContext'
import { useContext } from "react";
const { Meta } = Card;
const CardComponent = (props) => {
  const search = useContext(SearchContext)
  const [visible, setvisible] = useState(false);
  const [modelItemIndex, setmodelItemIndex] = useState();
  const [drawercallback,setdrawercallback] = useState()
  const [modelItem, setmodelItem] = useState();
  const [counter, setcounter] = useState();
  const [itemNumber, setitemNumber] = useState();
  const [isActive, setisActive] = useState([]);
  const [draweritem, setDraweritem] = useState([]);
  const { cardToShow, visibleitem, setcardToShow } = props;
  console.log(search,"usecontext")
console.log(drawercallback)
  const showModal = (item,index) => {
    setvisible(true);
    console.log(index)
    setmodelItemIndex(index)
    // console.log(index)
    // let fullarr = [];
    // let existingItem = fullarr.find((cartItem) => cartItem.id == item.id);
    // console.log(existingItem);
    // if (existingItem) {
    //   existingItem.counter += 1; //update item
    // } else {
    //   //if item doesn't exist, simply add it
    //   fullarr.push(item);
    // }
    // setDraweritem(fullarr);
    setmodelItem(item);
  };
  const handleOk = (e) => {
    setvisible(false);
  };
  const getCardClass = (index) => {
    return isActive[index] 
      ? cardComclasses.cartsbuttonhide
      : cardComclasses.cartsbutton;
  };
  const getCardClass1 = (index) => {
    return isActive[index]  
      ? cardComclasses.plUsMinusDivshow
      : cardComclasses.plUsMinusDiv;
  };

  const Draweritem = (item, index) => {
    let fullarr = [...draweritem];
    let existingItem = fullarr.find((cartItem) => cartItem.id == item.id);
    console.log(existingItem);
    if (existingItem) {
      existingItem.counter += 1; //update item
    } else {
      //if item doesn't exist, simply add it
      fullarr.push(item);
    }
    setDraweritem(fullarr);
  };

  // const incrementFun = (item,index) => {
  //   const newCounters = Object.assign(cardToShow, {
  //     ...cardToShow,
  //     [index ]: { ...cardToShow[index],  counter: cardToShow[index].counter + 1 }
  //   });

  //   console.log(newCounters)
  //   setcardToShow({cardToShow:newCounters})

  // };

  const decrementFun = (mainitem, index) => {
    console.log(mainitem.id)
    let fullarr = [...draweritem];
    let existingItem = fullarr.find((cartItem) => cartItem.id == mainitem.id);
    console.log(existingItem);
    // let a = existingItem.counter > 1 ? existingItem.counter -1   : existingItem.counter;
    if (existingItem) {
      let a = existingItem.counter > 0 ? existingItem.counter -1   : existingItem.counter;
      existingItem.counter = a;
      // existingItem.counter -= 1  //update item
    } else {
      //if item doesn't exist, simply add it
      fullarr.push(mainitem);
    }
    setDraweritem(fullarr);
    // console.log(index);
    // const newCounters = Object.assign(cardToShow, {
    //   ...cardToShow,
    //   [index]: { ...cardToShow[index], counter: cardToShow[index].counter > 1 ?  cardToShow[index].counter - 1 : cardToShow[index].counter }
    // });
    // console.log(newCounters)
    // setcardToShow({cardToShow:newCounters})
    // let e = existingItem.counter == 1 ? existingItem.counter : existingItem.counter;
    if (mainitem.counter == 0 && existingItem.counter == 0) {
      
       let r = [...isActive];
      r[ mainitem.id ] = false;
      let drawerItemFilter = draweritem.filter((item, index1) => {
        return  mainitem.id !== item.id;
      });
      let itemNumberDecrement = itemNumber > 0 ? itemNumber - 1 : itemNumber;
      setDraweritem(drawerItemFilter);
      setisActive(r);
      setitemNumber(itemNumberDecrement);
   
  }
  };
  console.log(draweritem)
  const itemNumberFun = (item) => {
    let Number = itemNumber ? itemNumber : null;
    Number += item;
    setitemNumber(Number);
  };
  const active = (index) => {
    new Array(index.length).fill(false);
    const activeButtons = [...isActive];
    activeButtons[index] = true;
    setisActive(activeButtons);
  };
  console.log(isActive,"isActive")

  console.log(isActive, "ddc");
  const filterForEveryOne = (item) => {
    console.log(item)
    
    return item.filter((object)=>{
      const checkField = object.title.toLowerCase()
      const filteredField = search.searchProduct.toLowerCase();
      return checkField.includes(filteredField) 
    })
  }
let filterArray = [];
if(cardToShow && cardToShow.length > 0){
  filterArray = filterForEveryOne(cardToShow)
}
  return (
    <div className={classes.productList}>
      {/* <h1>{search.search}</h1> */}
      {filterArray.slice(0, visibleitem).map((item, index) => {
        return (
          <div className={classes.cardStyle}>
            {/* onClick={() => showModal(item)} */}
            <Card
              hoverable
              className={classes.CardsOriginal}
              cover={
                <img
                  alt="example"
                  className={cardComclasses.coverImg}
                  onClick={() => showModal(item,index)}
                  src={item.image1}
                />
              }
            >
              <div>
                {/* <span onClick={showModal}> */}
                <Meta
                  title={item.title}
                  description="1pc(s)"
                  onClick={() => showModal(item,index)}
                />
              </div>
              <div className={cardComclasses.cardsEndDiv}>
                <p onClick={() => showModal(item,index)}>{item.price}</p>
                {/* <Link to="cart"> */}{" "}
                <button
                  onClick={() => {
                    // setisActive(index);
                    active(index);
                    Draweritem(item, index);
                    itemNumberFun(1);
                  }}
                  className={getCardClass(item.id)}
                >
                  {" "}
                  <Cart />
                  <span>cart</span>{" "}
                </button>
                <div className={getCardClass1(item.id)}>
                  <button
                    onClick={() => {
                      // item.counter = 1;
                      // setcounter(item)
                      Draweritem(item, index);
                    }}
                    className={cardComclasses.plusbutton}
                  >
                    +
                  </button>
                  <span>{item.counter}</span>
                  <button
                    className={cardComclasses.minusButton}
                    onClick={() => decrementFun(item, index)}
                  >
                    -
                  </button>
                </div>
                {/* </Link> */}
                {/* <button onClick={showModal}>x</button> */}
              </div>
              {/* </span> */}
            </Card>
          </div>
        );
      })}

      <ModelComponent
        // handleCancel={handleCancel}
        handleOk={handleOk}
        visible={visible}
        setvisible={setvisible}
        item={modelItem}
        isActive={isActive}
        setisActive={setisActive}
        // decrementFun={decrementFun}
        modelItemIndex={modelItemIndex}
     
        decrementFun={decrementFun}   
        Draweritem={Draweritem} 
        getCardClass={getCardClass}
        getCardClass1={getCardClass1}
        active={active}
        itemNumberFun={itemNumberFun}
        />
        
      <div>
        <DrawerCom
          setitemNumber={setitemNumber}
          itemNumber={itemNumber}
          setDraweritem={setDraweritem}
          draweritem={draweritem}
          counter={counter}
          setcounter={setcounter}
          isActive={isActive}
          decrementFun={decrementFun}
          // incrementFun={incrementFun}
          setisActive={setisActive}
          cardToShow={cardToShow}
          Draweritem={Draweritem}
          setdrawercallback={setdrawercallback}
        />
      </div>
    </div>
  );
};
export default CardComponent;
