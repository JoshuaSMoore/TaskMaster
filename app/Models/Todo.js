import { generateId } from "../Utils/generateId.js"



export class Todo{
 constructor(TodoData){
  this.title = TodoData.title
  this.listItemid = TodoData.listItemid
  this.id = TodoData.id || generateId
 }


  get Template(){
      return /*html*/`
      <div class="form-checkbox text-center d-flex justify-content-evenly">
      <ul class = "">
    <input class="form-check-input me-1" type="checkbox" value="">
    ${this.title} </label>
    <button onclick = "app.listItemsController.deleteListItem('${this.id}')" class="btn-close ps-5" aria-label="Close"></button>

  </div>

      `
  }
}