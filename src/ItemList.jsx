import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const ItemList = (props) => {
    return(
      <div className ={"content"}>
        {
          props.items.map( item => {
              return <Item
              key={item.title}
              imgSrc={item.imgSrc}
              price={item.price}
              title={item.title}
              />;
          })
        }
      </div>
    );
  };

ItemList.propTypes = {
    items:PropTypes.array.isRequired
  };

  const Item = (props) => {
    return (
    <Link to={"/item"}>
      <div className={"item"}>
      <img src={props.imgSrc}/>
      <div className="item__title">{props.title}</div>
      <div className="item__price">{props.price}</div>
      </div>
    </Link>
    );
};

Item.propTypes = {
  imgSrc:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  price:PropTypes.string.isRequired,

};

export default ItemList;