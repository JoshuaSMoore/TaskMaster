import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { saveState } from "../Utils/LocalStorage.js";



class TodoService{
  constructor(){
    ProxyState.on('todos', saveState)
  }

  createNewTodo(TodoData){
    ProxyState.todos = [...ProxyState.todos, new Todo(TodoData)]
    ProxyState.todos = ProxyState.todos
    console.log('we didit task service', ProxyState.todos);
  }

  deleteTodo(id){
    ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
    
  }

}





export const todoService = new TodoService()