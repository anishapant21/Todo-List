import React, { Component } from 'react'
//this one for displaying in the list
export default class TodoItem extends Component {
    render() {
        const {title}=this.props //we catch title props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6> {title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success">
                        <i className="fas fa-pen"/>
                    </span>
                    <span className="mx-2 text-danger">
                        <i className="fas fa-trash"/>
                    </span>

                </div>
            </li>
        );
    }
}
