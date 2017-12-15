import React, {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Todolist from "./Todolist";
import AddNewTodo from "./AddNewTodo";
import { connect } from "react-redux";
import * as actions from "../actions";

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <AddNewTodo />
                <Todolist />
                
                <Footer />
            </div>
        )
    }
}

