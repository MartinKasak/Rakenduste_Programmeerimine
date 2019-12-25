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
     title:"",

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
    console.log({title: this.state.title});

};


  handleBuy = () => {
    this.props.dispatch(addItem(this.state));
};

handleSubmit = (event) => {
  event.preventDefault();
  services.getTitle({itemId: this.props.match.params.itemId})
  .then(() => {
    toast.success("Success");
})
  .catch(err =>{
    console.log(err);
    toast.error("Error2!");

});
console.log({title: this.state.title});
};

handleChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value,
  });
  console.log(this.state);
  
  console.log("?????");
  console.log({itemId: this.props.match.params.itemId});
  console.log({title: this.state.title});
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
                    <form className="newTitle" onSubmit = {this.handleSubmit}>
                        <input type="title" placeholder="title" name = {"title"} onChange = {this.handleChange}/>                        
                        <button>Muuda nime</button>
                    </form>
                    </div>
                    <div className={"itemPage-footer"}>
                        <FancyButton onClick={this.handleBuy}>Osta</FancyButton>
                    </div>
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