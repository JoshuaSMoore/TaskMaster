import { generateId } from "../Utils/generateId.js"



export class Todo{
 constructor(TodoData){
  this.title = TodoData.title
  this.id = TodoData.id || generateId()
  this.listItemid = TodoData.listItemid
 }


  get Template(){
      return /*html*/`
      <div class="form-checkbox text-center d-flex justify-content-evenly">
      <ul class = "">
    <input class="form-check-input me-1" type="checkbox" value="">
    ${this.title} </label>
    <button onclick = "app.todoController.deleteTodo('${this.id}')" id = "deleted" class="btn-close ps-5" aria-label="Close"></button>

  </div>

      `
  }
}