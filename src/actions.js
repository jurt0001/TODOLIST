export const TOGGLE_STATUS = "TOGGLE_STATUS";
export const ADD_TODO_VALUE = "ADD_TODO_VALUE";
export const SAVE_NEW_TODO = "SAVE_NEW_TODO";

export function toggleStatus(id){
    
    return {
        type: TOGGLE_STATUS,
        id: id
        
    };
    
}

export function addTodoValue(value){
    
    return {
        type: ADD_TODO_VALUE,
        value: value
    };
    
}

export function saveNewTodo(){
    
    return {
        type: SAVE_NEW_TODO
        
    };
    
}

