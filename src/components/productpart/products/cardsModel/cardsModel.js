import React from "react";
import { Modal } from "antd";
import "./modelcutom.css";
import { ReactComponent as Cart } from "./../cart/cartasset/cart-minus.svg";
import classes from "./cardsModel.module.css";
import cardComclasses from './../cardsCom.module.css'
import Gallery from "./../cardsModel/galleryPic/galleryPic";

const CardsModel = (props) => {
  //  console.log(props.match.params.id)
  console.log(props);
  const {
    visible,
    setvisible,
    item,
    // draweritem,
    // setDraweritem,
    modelItemIndex,
    decrementFun,
    // drawercallback,
    Draweritem,
    getCardClass,
    itemNumberFun,
    getCardClass1,
    active
  } = props;
  // console.log(drawercallback)
  // const [show, setShow] = useState(false);
  // const tab1Active = () => {
  //   setShow(true);
  // };
  // const  increment = (index) => {
  //   let pushFinalproduct = []
  //   if(modelItemIndex === index){
  //     item.counter += 1; 
  //     console.log(item)
  //     pushFinalproduct.push(item)
  //     setDraweritem(pushFinalproduct)
  //   }
  // }
  // console.log(draweritem  ? draweritem : "")
  // const decrement = (index) => {
    // console.log(index)
    // let pushFinalItem = []
    // if(modelItemIndex === index){
    //   let a = item.counter > 0 ? item.counter -1   : item.counter;
    //   item.counter = a 
    //   console.log(item)
      
    // }else if(item.counter === 0){
    //   pushFinalItem.filter((itm)=>{
    //     return itm.id !== item.id
    //   })
    // }
//     console.log(drawercallback,)
//     console.log(draweritem)
//     if (item.counter == 0) {
      
//       let r = [...isActive];
//      r[ item.id ] = false;
//      var drawerItemFilter = pushFinalItem.filter((item1, index1) => {

//        return console.log(item1) || item1.id !== drawercallback.id 
//      });
//      let itemNumberDecrement = item.id === index ? itemNumber > 0 ?  itemNumber - 1 : itemNumber : "";
//      setisActive(r);
//      setitemNumber(itemNumberDecrement);
//      console.log(r)
  
//  }
    // console.log(pushFinalItem,"fff")
    // setDraweritem(pushFinalItem)
    
  // }
  // const getCardClass = (index) => {
  //   console.log(isActive)
  //   console.log(index);
  //   return isActive === modelItemIndex
  //     ? classes.modelcartsbuttonhide
  //     : classes.cartButon;
  // };
  // const getCardClass1 = (index) => {
  //   console.log(index);
  //   return isActive === modelItemIndex  ? classes.plUsMinusDivshow : classes.plUsMinusDiv;
  // };
  return (
    <div>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal
        // className={classes.modalWidth}
        // title="Basic Modal"
        width="740px"
        visible={visible}
        footer={null}
        // onOk={() => setvisible(false)}
        onCancel={() => setvisible(false)}
      >
        {/* {draweritem ? draweritem.map((item)=>{
          return   */}
          <div className={classes.mainDiv}>
          <div className={classes.firstDiv}>
            <Gallery
              modelItem={item ? item.image1 : ""}
              modelItem1={item ? item.image2 : ""}
              modelItem2={item ? item.image3 : ""}
              modelItem3={item ? item.image4 : ""}
            />
          </div>
          <div className={classes.secondDiv}>
            <div className={classes.secondContentDiv}>
              <div>
                <h1 className={classes.modelItemHeading}>
                  {item ? item.title : ""}
                </h1>
                <p className={classes.contentModelproductNumber}>1 pc(s)</p>
                <p className={classes.contentModelDescription}>
                  {item ? item.description : ""}
                </p>
                {/* className={classes.modelCartbtnDiv} */}
                <div  className={cardComclasses.cardsEndDiv} >
                  
                  <button
                    onClick={() => {
                      active(modelItemIndex);
                      itemNumberFun(1);
                      Draweritem(item)
                    }}
                    className={getCardClass(item ? item.id : "")}
                  >
                    {" "}
                    <Cart />
                    <span>cart</span>{" "}
                  </button>
                  <div
                    // className={classes.plUsMinusDivshow}
                    className={getCardClass1(item ? item.id : "")}
                    // className={`${
                    //   showCartButton
                    //     ? cardComclasses.plUsMinusDivshow
                    //     : cardComclasses.plUsMinusDiv
                    // } `}
                  >
                    <button
                      // onClick={() => {
                      //   alert("sdds");
                      // }}
                     
                      className={cardComclasses.plusbutton}
                      // className={classes.plusbutton}
                      onClick={() => Draweritem(item)}
                    >
                      +
                    </button>
                    <span>{item ? item.counter : ""}</span>
                    <button
                      // className={classes.minusButton}
                      className={cardComclasses.minusButton}
                      onClick={() => {
                        decrementFun(item);
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
              <div className={classes.priceDiv}>
                {item ? item.price : ""}
              </div>
            </div>
          </div>
        </div>
        {/* }):""} */}
       
      </Modal>
    </div>
  );
};
export default CardsModel;

// import React,{useState, useEffect} from "react";
// import classes from './cardsModel.module.css'
// import { Link} from 'react-router-dom'
// const CardsModel = ({ location }) => {
//   const { state = {} } = location;
//   const { modal } = state;
//   console.log(location)
//   console.log(state)
//   return (
//     <div className={modal ? classes.modal : undefined}>
//       {modal && <Link to="/">Close</Link>}
//       <div>
//         <img src="https://source.unsplash.com/random" style={{width:"100%"}}/>
//       </div>
//     </div>
//   );
// };
// export default CardsModel;
