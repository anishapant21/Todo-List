import React, { Component } from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'uuid';

class App extends Component{
  render(){
    return (
      <div className='container'>
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput />
          <TodoList />

          </div>
        </div>
      </div>

    );

  }
  
}

export default App;
