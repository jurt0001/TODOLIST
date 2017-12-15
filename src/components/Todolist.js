import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import * as actions from "../actions";

class Todolist extends Component {
    render() {
        const todos = this.props.todos.map((item) => {
            return (
                <Todo {...item} onClick={this.props.onTodoClick} />
            )
        });
        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state) {
    
    return {
        
          todos: state.todoList
    }
}


export default connect(mapStateToProps)(Todolist);