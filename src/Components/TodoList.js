import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class TodoList extends Component {
    render() {
        const{items, clearList, handleDelete, handleEdit}=this.props //destructor to take props value passed from appjs
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center"> todo list </h3>
                {
                    items.map(item=>{
                       return <TodoItem 
                       key={item.id} 
                       title={item.title}
                       handleDelete={()=>handleDelete(item.id)} //creating arrow function for implicit return otherwise throws error
                       handleEdit={()=>handleEdit(item.id)}

                       />
                    
                    })
                }
                

                <button type="button" 
                className="btn btn-danger btn-block text-capitalize mt-5"
                onClick={clearList}>  
                    clear list
                    
                </button>
            </ul>
            
        )
    }
}
