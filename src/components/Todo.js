import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Todo extends Component {
    render() {
        return (
            <li className={this.props.status ? "done" : "open"} id={"todo-" + this.props.id}>
            
                <button className="todo" onClick={this.props.toggleStatus}>{this.props.status ? "👍" : "👎"}</button> 
                <p className="text">{this.props.text}</p>
            </li>
        )
    }
}

function mapStateToProps(dispatch, ownProps) {
    
    return {
        
//        toggleStatus:() => dispatch(actions.toggleStatus(ownProps.id))
    };
    
}

function mapDispatchToProps(dispatch, ownProps) {
    
    return {
        
        toggleStatus:() => dispatch(actions.toggleStatus(ownProps.id))
    };
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);