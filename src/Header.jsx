import React from "react";
import {Link} from "react-router-dom";
import {profileIcon, cartIcon} from "./icons";
import "./header.css";

const Header = () => {
    return (
      <div className="header">
        <Link to={"/"}>
          <img className="header__logo" src="/images/Tlu_logo.png"/>
        </Link>
        <div className="header__buttons">
          <div className={"header__button"}>
            <img src ={profileIcon}/>
            <div className={"header__button-text"}>Login/<br/>Register</div>
          </div>
        <div className={"header__button"}>
          <img src={cartIcon} style={{height:35}}/>
          <div className={"header__button-text"}>Cart</div>
          </div>
      </div>
    </div>
    );
  };

export default Header;