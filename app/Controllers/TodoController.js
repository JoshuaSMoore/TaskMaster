
import {todoService} from "../Services/TodoService.js"






export class TodoController{
  constructor(){
}

createNewTodo(listItemid){
  event.preventDefault()
  let form = event.target

  let TodoData = {
    title: form.newTodo.value,
    listItemid: listItemid
  }
  todoService.createNewTodo(TodoData)
  console.log( 'is it working', TodoData)
}

}

