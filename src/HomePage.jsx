import React from "react";
//import ReactDOM from "react-dom";
//import {laptops, phones} from "./mydatabase.js";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";


class HomePage extends React.PureComponent{

    constructor(props){
      super(props);
      this.state = {
        items: [], 
        selectedCategory:"phones",
      };
      
    }
  
    componentDidMount(){
      this.fetchItems();
    }
    
    fetchItems = () =>{
      fetch("/api/items")
      .then(res =>{
        console.log("res", res);
        return res.json();
      })
      .then(items=>{
        console.log("items", items);
        this.setState({
          items
        });
      })
      .catch(err =>{
        console.log("err", err);
      });
    };

   
  handleDropdown(event){
    console.log(event.target.value);
    this.setState({
      selectedCategory:event.target.value
    });
  }

  getVisibleItems = () => {
    return this.state.items.filter(item => item.category === this.state.selectedCategory);
  };

  render(){
    console.log("this.state", this.state);
    return (
      <>
      <Header/>
      <select onChange={this.handleDropdown.bind(this)}>
        <option value="phones">Phones</option>
        <option value="laptops">Laptops</option>
      </select>
      <ItemList items={this.getVisibleItems()} />
    </>
    ); 
  }
}

export default HomePage;