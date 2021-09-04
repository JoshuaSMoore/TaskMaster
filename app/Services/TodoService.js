import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";



class TodoService{
  constructor(){
  }

  createNewTodo(TodoData){
    ProxyState.todos = [...ProxyState.todos, new Todo(TodoData)]
    console.log('we didit task service', ProxyState.todos);
  }

}

export const todoService = new TodoService()