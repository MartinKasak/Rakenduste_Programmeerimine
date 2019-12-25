import React from "react";
import PropTypes from "prop-types";
import { UserPropTypes } from "../store/reducer.js";
import {connect} from "react-redux";
import FancyButton from "../components/FancyButton.jsx";
import { tokenUpdate, userUpdate, refreshUser } from "../store/actions.js";
import protectedRedirect from "../components/protectedRedirect.jsx";
import * as selectors from "../store/selectors.js";
import * as  services from "../services.js";
import { toast } from "react-toastify";


class UserPage extends React.PureComponent {

    static propTypes = {
        user: PropTypes.shape(UserPropTypes),
        dispatch: PropTypes.func.isRequired,
        token:PropTypes.string.isRequired,  
        userId:PropTypes.string.isRequired,

    };
    
    constructor(props){
        super(props);
         this.state = {
            payments: [],
            title:"",
            price:"",
            imgSrc:"",
            category:"",
            email:"",
        };
        }
    

    componentDidMount(){
        const {userId, token} = this.props;
        services.getPayments({userId, token})
        .then(docs => {
           // console.log("docs",docs);
            this.setState({
                payments:docs,
            });
        });
    }

    handleLogout = () => {
        this.props.dispatch(userUpdate(null));
        this.props.dispatch(tokenUpdate(null));
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        services.lisaItem(this.state)
            .then( () => {
          toast.success("Toode Lisatud");
    })
        .catch(err =>{
          console.log(err);
          toast.error("Error!");
 
    });
  };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(this.state);
    };

    /*Emaili muutmine services.js fail lihtsalt */

  handleEmail = (event) => {
        event.preventDefault();
        fetch(`api/v1/users/${this.props.user._id}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then( () => {
        this.props.dispatch(refreshUser());

        toast.success("Muudetud Email");
    })
        .catch(err =>{
          console.log(err);
          toast.error("Error!");
 
    });
};

handleEmailChange  = (event) => {
    this.setState({
    [event.target.name]: event.target.value,
        });
        console.log(this.state);
    };

handleAddItemSubmit = e => {
    e.preventDefault();
    console.log("submit: add item", `api/v1/items/${this.props}`);
    fetch("api/v1/items/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(() => {
        toast.success("Item successfully added!");
      })
      .catch(err => {
        console.log("Error", err);
        toast.error("Adding item failed!");
      });
  };

  handleAddItem = e => {
    // console.log("handle add item", e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

    render() {
        return (
            <div className="spacer">
                <div className="box">
                    <div style={{display:"flex", justifyContent: "flex-end"}}>
                        <div className="field">
                            {this.props.user.email}
                        </div>
                        <div className="field">
                            {this.props.user.createdAt}
                        </div>
                        
                        <FancyButton onClick={this.handleLogout}>Logi välja</FancyButton>
                        <br>
                        </br>
                         
                    </div>
                    <div>
                        <br></br>
                    </div>
                    
                    <form className="lisaItem" onSubmit = {this.handleSubmit}>
                        <input type="title" placeholder="Toote nimetus" name = {"title"} onChange = {this.handleChange}/>
                        <input type="price" placeholder="Hind"name = {"price"} onChange = {this.handleChange}/>
                        <input type="imgSrc" placeholder="Pildi URL" name = {"imgSrc"} onChange = {this.handleChange}/>
                        <input type="category" placeholder="phones/laptops"name = {"category"} onChange = {this.handleChange}/>                        
                        <button>Loo uus toode</button>
                    </form> 
                </div>
                <div className={"box"}>
                        <form className="editForm" onSubmit={this.handleEmail}>
                       <input type="email"  placeholder="Muuda email"    name="email"  value={this.state.email} onChange={this.handleEmailChange}
                         />
                        <button>Muuda Meil</button>
                       </form>
                       </div>
                <br></br>
                <h2  align="center">Kasutaja Ostuajalugu</h2>
                <div className={"box"}>
                {this.state.payments.map(payment  =>{
                    return (
                    <div key={payment._id} className={"payment__row"}>
                        <div>{payment.createdAt}</div>
                        <div>{payment.cart.length}</div>
                        <div>{payment.amount}</div>
                    </div>
                    );
                })}
                </div>
            </div>
           
        );
    }
}
 
const mapStateToProps = (store) => {
    return {
        user: selectors.getUser(store),
        token: selectors.getToken(store),
        userId: selectors.getUserId(store),
    };
};
export default connect(mapStateToProps)(protectedRedirect(UserPage)); 
