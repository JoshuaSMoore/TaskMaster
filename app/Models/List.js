import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"



export class List{
  constructor(listData){
    this.name = listData.name 
    this.id = listData.id || generateId()
  }

get Template(){
  return /*html*/ `
  <div class="col-md-3 text-center d-flex justify-content-between me-2">
  <div class = "card-header ListCard p-2">
  <h4 class = "text-center">${this.name} <button onclick = "app.listItemsController.deleteListItem('${this.id}')" class="btn-close ps-5" aria-label="Close"></button> </h4>
  <div class="card-body shadow ListCard text-start">
    ${this.Todos} 
    </div>
    <div class="card-footer text-muted  bg-transparent">
    <form onsubmit = "app.todoController.createNewTodo('${this.id}')">
    <input type = "text" name ="newTodo" min-length="3" maxlength="30" required placeholder="New Todo"/>
    <button type = "submit" class = "btn btn secondary shadow">Todo </button>
    </form>
    </div>
    </div>
`
}





get Todos(){
  let template = ''

  let foundTodo = ProxyState.todos.filter(t => t.listItemid == this.id)
  console.log('after filter', foundTodo)
  foundTodo.forEach(t => template += t.Template)
  return template
}
}