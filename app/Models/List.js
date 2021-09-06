import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"



export class List{
  constructor(listData){
    this.name = listData.name 
    this.id = listData.id || generateId()
    this.color = listData.color
  }

get Template(){
  return /*html*/ `
  <div class="col-4 ps-5 pt-4">
  <div class = "card ListCard">
  <div class = "card-header p-2 shadow" style ="background-color:${this.color}">
  <h4 style = "background-color:${this.color}" class = "ListFont text-center">${this.name} <button onclick = "app.listItemsController.deleteListItem('${this.id}')" id = "deleted" class="btn-close" aria-label="Close"></button> </h4>
  <div class="card-body shadow  text-start ListCard" style = "background-color:${this.color}">
    ${this.Todos} 
    </div>
    <div class="card-footer text-muted  bg-transparent text-center">
    <form onsubmit = "app.todoController.createNewTodo('${this.id}')">
    <input type = "text" name ="newTodo" min-length="3" maxlength="50" required placeholder="New Todo"/>
    <button type = "submit" class = "btn btn secondary shadow">Add</button>
    </form>
    </div>
    </div>
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