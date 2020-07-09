import React, { Component } from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

import "bootstrap/dist/css/bootstrap.min.css";
import {v1 as uuid} from "uuid";




class App extends Component{
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  }
  //handlechange is a method to show what we have typed in the box
  handleChange=(e)=>{
    this.setState({
      item:e.target.value
    });
  };
  //handleSubmit is a method to submit the values we type
  handleSubmit=(e)=>{
    e.preventDefault();

  const newItem={
    id:this.state.id,
    title:this.state.item
  };

//In updatedItems we are using spread operator to get previous items and new items
  const updatedItems=[...this.state.items, newItem];
  this.setState({
    items:updatedItems,
    item:'',  //it sets the box empty again
    id:uuid(),  //with a completely different id for next item
    editItem:false
  });

  };
  //clearlist sets the items to empty
  clearList=()=>{
    this.setState({
      items:[]
    });
  };
  //filters item such that it doesn't match the given id
  handleDelete=(id)=>{
    const filteredItems=this.state.items.filter(item=> item.id !== id)
    this.setState({
      items:filteredItems
    });
  };

  render(){
    return (
      <div className='container'>
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput item={this.state.item} //passing method to todoinput
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}/>
          <TodoList items={this.state.items} //passing items value to todolist
           clearList={this.clearList}
           handleDelete={this.handleDelete}
           />

          </div>
        </div>
      </div>

    );

  }
  
}

export default App;
