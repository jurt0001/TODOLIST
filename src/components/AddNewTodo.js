import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class AddNewTodo extends Component {
    render() {
        return (
            <div className="todo-input">
            
                <input type="text" value={this.props.addTodoValue} onChange={this.props.addTodoChanged} placeholder="Add Assignment" />
                
            <button className="add" onClick={this.props.saveNewTodo}>
            Add </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    
    return {
        
        addTodoValue: state.addTodoValue
          
    }
}

function mapDispatchToProps(dispatch) {
    
    return {
        
        addTodoChanged : (e) => dispatch(actions.addTodoValue(e.target.value)),
        saveNewTodo    : () => dispatch(actions.saveNewTodo())
    };
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTodo);