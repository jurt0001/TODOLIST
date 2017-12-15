import * as actions from "./actions";

export default function todoApp(state, action) {
    
    let newState = Object.assign({}, state);
    let todoList = newState.todoList.slice();
    let newItem = {};
    const lastId = todoList[todoList.length-1].id;
    let animation; 
    
    switch(action.type) {
        case actions.TOGGLE_STATUS:
            
       for (let i = 0; i < todoList.length; i++) {
                let todo = todoList[i];
                let id = action.id;
                if (todo.id == id) {
                    todo.status = (todo.status) ? 0 : 1;
                    break;
                }
            }
            newState = Object.assign({}, newState, {todoList});
            break;
            
        case actions.ADD_TODO_VALUE:
            newState = Object.assign({}, newState, {"addTodoValue" : action.value});
            break;
            
        case actions.SAVE_NEW_TODO:
            if(newState.addTodoValue){
            newItem.id = lastId+1;
            newItem.key = lastId+1;
            newItem.text = newState.addTodoValue;
            newItem.status = 0;
            todoList.push(newItem);
            newState = Object.assign({}, newState, {todoList, "addTodoValue" : ""}); 
            window.scrollTo(0, document.body.scrollHeight);   
                }else {
                alert("You must Enter an Assignment Name!")        
                }
            break;
        default:
            return state;
            
    }
    return newState;
    
}