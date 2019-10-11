import React from "react";
import {laptops, phones} from "./mydatabase.js";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";

class HomePage extends React.PureComponent{

    constructor(props){
      super(props);
      this.state = {
        items:phones,
        selectCategory:phones,
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

    handleChange(event) {
      console.log(event.target.value);
      switch (event.target.value){
        case "phones":{
          this.setState({
          items: phones,
        });
        break;
      }
      case "laptops":{
        this.setState({
          items: laptops,
        });
        break;
      }
    }
    
  }
  handleDropdown(event){
    console.log(event.target.value);
    this.setState(     {
      selectCategory:event.target.value
    });
  }

  getVisibleItems = () => {
    return this.state.items.filter(item => item.category === this.state.selectCategory);
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