
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
  // @ts-ignore
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Todo has been added',
    showConfirmButton: false,
    timer: 1500
  })
  todoService.createNewTodo(TodoData)
  form.reset()
}


deleteTodo(id){
  let i = confirm("Are you sure??")
    if(i == true){
      todoService.deleteTodo(id)
      // @ts-ignore
      swal({
        icon: "success",
      });
    } else {}
    
  }



completeTodo(id){
 todoService.completeTodo(id)
 
}




}

