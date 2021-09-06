import { generateId } from "../Utils/generateId.js"



export class Todo{
 constructor(TodoData){
  this.title = TodoData.title
  this.id = TodoData.id || generateId()
  this.listItemid = TodoData.listItemid
  this.checked = TodoData.checked
 }


  get Template(){
      return /*html*/`
      <div class="form-checkbox">
      <div class = "col">
      <list-group>
      <p class="todo-style" onclick ="app.todoController.completeTodo('${this.id}')"><input type="checkbox" value="" ${this.checked ? "checked" : ""}>
      ${this.title}
      <button onclick = "app.todoController.deleteTodo('${this.id}')" id = "deleted" class="mdi mdi-delete-clock-outline" aria-label="Close"></button>
      </p> 
      </div>
      </div>
      

      `
  }
}