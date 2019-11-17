import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./itemList.css";

const ItemList = (props) => {

    return (
        <div className = {"items-layout"}>
          {
              props.items.map( item => {
                  return <Item 
                  key ={item.id}
                  id={item.id}
                  imgSrc = {item.imgSrc}
                  price = {item.price}
                  title = {item.title}

                  />;     
              })
          }
      </div>
    );
  };

  ItemList.propTypes = {
      items: PropTypes.array.isRequired
  };

  const Item = (props) => {
      return (
        <Link to={`/items/${props.id}`} className={"item"}>
            <div className = {"item_img-wrapper"}>
                <img src = {props.imgSrc}/>
            </div>
            <div className={"item_description"}>
                <div className = "item_title">{props.title}</div>
                <div className={"item_footer"}>
                    <div className = "item_price">{props.price}</div>
                    <div className="item_reviews">{`(${getRandomIntInclusive(0,100)} reviews)`}</div>
                </div>
            </div>
          </Link>
      );
  };

  Item.propTypes = {
    id:PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  };

  export default ItemList;

  function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }