import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListsService{

  constructor(){
    ProxyState.on('listItems', saveState)
  }

  createNewList(listItemData, event){
    ProxyState.listItems = [...ProxyState.listItems, new List(listItemData)]
    console.log("we did it list service", ProxyState.listItems)
}

deleteListItem(listItemid){
  console.log('delete works!', listItemid)
  
  ProxyState.listItems = ProxyState.listItems.filter(l => l.id !== listItemid)

  ProxyState.todos = ProxyState.todos.filter(todos => todos.id !== listItemid)

}

}

export const listsService = new ListsService()