import React from "react";
//import ReactDOM from "react-dom";
//import {laptops, phones} from "./mydatabase.js";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import Checkbox from "./Checkbox.jsx";


class HomePage extends React.PureComponent{

    constructor(props){
      super(props);
      this.state = {
        items: [], 
        allCategories:["phones", "laptops"],
        selectedCategories:["phones"],
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

   
  handleDropdown = (event) => {
    console.log(event.target.value, event.target.name);
    if(this.isSelected(event.target.name)){
      const clone = this.state.selectedCategories.slice();
      const index = this.state.selectedCategories.indexOf(event.target.name);
      clone.splice(index, 1);
      this.setState({
        selectedCategories:clone
      })
    }
  else{
    this.setState({
      selectedCategories:this.state.selectedCategories.concat([event.target.name])
      
    });
  }

  getVisibleItems = () => {
    return this.state.items.filter(item => this.isSelected(item.category));
  };

  isSelected = (name) => this.state.selectedCategories.indexOf(name) >= 0; 

  render(){
    console.log("this.state", this.state);
    return (
      <>
      <Header/>
      {
        this.state.allCategories.map(categoryName =>{
          return (
            <Checkbox 
              key={categoryName}
              name={categoryName} 
              onChange={this.handleDropdown} 
              checked={this.isSelected(categoryName)}
             />
            );
          })
        } 
        <ItemList items={this.getVisibleItems()} />
      </>
    ); 
  }
}
export default HomePage ;