import React from "react";


const Header = () => {
    return (
      <div className="header">
        <img className="header__logo" src="./images/tlu_logo.png"/>
        <div className="header__buttons">
        <button>Login/SignUp</button>
        <button>Cart</button>
          </div>
      </div>
    )
  
  };

export default Header;