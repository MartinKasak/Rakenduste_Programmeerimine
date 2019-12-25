import React from "react";
import PropTypes from "prop-types";
import { UserPropTypes } from "../store/reducer.js";
import {connect} from "react-redux";
import FancyButton from "../components/FancyButton.jsx";
import { tokenUpdate, userUpdate } from "../store/actions.js";
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

    handleSubmit2 = (event) => {
        event.preventDefault();
        services.muudaEmail(this.state)
            .then( () => {
          toast.success("Muudetud Email");
    })
        .catch(err =>{
          console.log(err);
          toast.error("Error!");
 
    });
  };

    handleChange2 = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(this.state);
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
                    <form className="newEmail" onSubmit = {this.handleSubmit2}>
                        <input type="email" placeholder="email" name = {"email"} onChange = {this.handleChange2}/>                        
                        <button>Muuda email</button>
                    </form>
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
