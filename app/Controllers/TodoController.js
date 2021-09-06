
import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import {todoService} from "../Services/TodoService.js"







export class TodoController{
  constructor(){
}

createNewTodo(listItemid){
  event.preventDefault()
  let form = event.target

  let TodoData = {
    title: form.newTodo.value,
    listItemid: listItemid,
    checked: false
  }
  todoService.createNewTodo(TodoData)
  form.reset()
}


deleteTodo(id){
  let i = confirm()
    if(i == true){
      todoService.deleteTodo(id)
      swal({
        icon: "success",
      });
    } else {}
    
  }



completeTodo(id){
 todoService.completeTodo(id)
 
}




}

