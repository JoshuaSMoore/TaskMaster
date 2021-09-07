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

    // @ts-ignore
    swal({
      icon: "success",
    });
    
    console.log('we didit task service', ProxyState.todos);
  }

  deleteTodo(id){
    ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
    // @ts-ignore
    Swal.fire({
      icon: 'error',
      title: 'Later Gator!',
    })
  }

  completeTodo(id){ 
 let todo = ProxyState.todos.find(t => id == t.id)
  todo.checked = !todo.checked;
  ProxyState.todos = ProxyState.todos
  console.log(todo)
  if(todo.checked == true) 
  
  console.log(count)
  
}





}
export const todoService = new TodoService()


// let count = document.querySelectorAll('input,[type="checkbox"]:checked').length; 
// document.getElementById('completed').innerHTML = count.toString()