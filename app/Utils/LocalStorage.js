import { Todo } from "../Models/Todo.js";
import { List } from "../Models/List.js";
import { ProxyState } from "../AppState.js";

export function saveState(){
  localStorage.setItem('ListSave', JSON.stringify({
    listItems: ProxyState.listItems,
    todos: ProxyState.todos
  }))
}

export function loadState(){
  let data = JSON.parse(localStorage.getItem("ListSave"))
  console.log('loaded', data)
  if(data != null){
    ProxyState.listItems = data.listItems.map(l => new List(l))
    ProxyState.todos = data.todos.map(t => new Todo(t))
  }
  console.log('loaded full')
}