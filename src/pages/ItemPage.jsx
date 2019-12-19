import React from "react";
import PropTypes from "prop-types";
import FancyButton from "../components/FancyButton.jsx";
import "./itemPage.css";

class ItemPage extends React.PureComponent{

  constructor(props){
    super(props);
    this.state={};
  }
  componentDidMount() {
   this.fetchItem();
  }
  fetchItem = () => {
    fetch(`/api/v1/items/${this.props.match.params.itemId}`)
    .then(res => {
      return res.json();
    })
    .then(item =>{
      console.log("item", item);
      this.setState({
        ...item
      });
    })
    .catch(err =>{
      console.log("item page", err);
    });
  };
  handleBuy = () => {
    console.log("click", this.props);
    /*this.props.dispatch(addItem(this.state));*/
};
    render(){
      console.log("itempage", this.props);

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
                                    <p className={"text--bold text--yellow"}>
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
   //dispatch: PropTypes.func.isRequired,
  };

  export default ItemPage;
  //export default connect()(ItemPage);
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut lacinia risus. In pulvinar erat a sollicitudin mollis. Suspendisse eget ornare quam, in viverra eros. Sed enim ex, convallis ac eros ut, mattis convallis metus. Vivamus quis bibendum nibh. Nulla suscipit pharetra posuere. Aliquam erat volutpat."; 