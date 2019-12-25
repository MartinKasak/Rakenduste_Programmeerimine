import React from "react";
import PropTypes from "prop-types";
import "./itemPage.css";
import FancyButton from "../components/FancyButton.jsx";
import {connect} from "react-redux";
import {addItem} from "../store/actions.js";
import * as services from "../services.js";
import { toast } from "react-toastify";
 
class ItemPage extends React.PureComponent{

  constructor(props){ 
    super(props);
    this.state={ 
     vahetaTitle:"",

    };
  }

  componentDidMount() {
   this.fetchItem();
  }


fetchItem = () => {
    services.getItem({itemId: this.props.match.params.itemId})
    .then(item =>{
      console.log("item", item);
      this.setState({
        ...item
      });
    })
    .catch(err =>{
      console.log("item page", err);
    });
    console.log("ITEMI_Id");
    console.log({itemId: this.props.match.params.itemId});
    console.log({title: this.props.match.params.itemId.title});

};
  handleBuy = () => {
    this.props.dispatch(addItem(this.state));
};
//Toon servicest lihtsalt ItemPagi ja hakkas tööle
handlePealkiriEdit = event => {
  event.preventDefault();
  fetch(`api/v1/items/${this.props.match.params.itemId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state)
  })
    .then(() => {
      toast.success("Nimi muutus");
    })
    .catch(err => {
      console.log("Error", err);
      toast.error("Nimi ei muutunud!");
    });
};

handlePealkiriChange = event => {
  this.setState({
    vahetaTitle: event.target.value
  });
};

render(){

      return (
        <>
          <div className={"box spacer itemPage"}>
            <div style={{display: "flex",}}>
              <div className={"itemPage-left"}>
                  <img src={this.state.imgSrc} />
                  </div>
                    <div className={"itemPage-content"}>
                    <div>
                    <h2>{this.state.title}</h2>
                    </div>
                     <div>
                    <div>
                      <p className={"itemPage-text"}>
                     {this.state.price} €
               </p>
          </div>
        <div>
               <p style={{textAlign: "justify"}}>
                      {loremIpsum}
                  </p>
              </div>
           </div>
       </div>              
 <div className={"itemPage-footer"}>
        <FancyButton onClick={this.handleBuy}>Osta</FancyButton>
           </div>
             </div>
            </div>
               <div className={"box spacer itemPage"}>
                 <form className="editPealkiriForm" onSubmit={this.handlePealkiriEdit}>
                <input
                  type="string"
                  placeholder="Muuda toote nime"
                  name="title"
                  value={this.state.vahetaTitle}
                  onChange={this.handlePealkiriChange}
                />
            <button>Muuda</button>
            </form>
    </div>
   </>
      );
    }
}

  ItemPage.propTypes ={
    match: PropTypes.object.isRequired,
   dispatch: PropTypes.func.isRequired,
  };

  export default connect()(ItemPage);
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut lacinia risus. In pulvinar erat a sollicitudin mollis. Suspendisse eget ornare quam, in viverra eros. Sed enim ex, convallis ac eros ut, mattis convallis metus. Vivamus quis bibendum nibh. Nulla suscipit pharetra posuere. Aliquam erat volutpat."; 