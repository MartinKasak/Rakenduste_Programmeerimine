import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import Header from "./components/Header.jsx";
import Pages from "./pages/index.jsx";
import "./pages/main.css";
import "typeface-roboto";

import {Provider} from "react-redux";
import configureStore from "./store/configureStore.js";
import {PersistGate} from "redux-persist/integration/react";

const {store, persistor} = configureStore();

const authDefaultValue = {
    token: null,
    user: {
      email: null,
      createdAt: null,
      _id: null,
    },
};
export const AuthContext = React.createContext(authDefaultValue);

class App extends React.Component {
    state = authDefaultValue;

    handleLogin = ({token, user}) => {
        this.setState({
            user, token
        });
    };

    render(){
        return(<Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
             <AuthContext.Provider value={this.state}>
                <BrowserRouter>
                <Route path={"/"} component = {Header}/>
                <Switch>
                    <Route path="/" exact component={Pages.HomePage} />
                    <Route path="/login" 
                        exact 
                        render={(props) => 
                            <Pages.LoginPage 
                                {...props} 
                                onLogin={this.handleLogin}
                            />
                        }  />
                    <Route path="/signup" exact component={Pages.SignupPage} />
                    <Route path="/users/:userId" exact component={Pages.UserPage} />
                    <Route path="/items/:itemId" exact component={Pages.ItemPage} />
                    <Route path="/checkout/cart" exact component={Pages.CartPage} />
                    <Route component={Pages.NotFound} />
                </Switch>
                </BrowserRouter>
            </AuthContext.Provider>
        </PersistGate>
        </Provider>
        );
    }
}

export default App; 