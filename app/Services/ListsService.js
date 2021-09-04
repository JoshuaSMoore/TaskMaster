import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService{

  constructor(){

  }

  createNewList(listItemData){
    ProxyState.listItems = [...ProxyState.listItems, new List(listItemData)]
    console.log("we did it list service", ProxyState.listItems)
}

deleteListItem(listItemid){
  console.log('delete works!', listItemid)

  ProxyState.listItems = ProxyState.listItems.filter(l => l.id !== listItemid)

  ProxyState.todos = ProxyState.todos.filter(t => t.listItemid !== listItemid)
}

}

export const listsService = new ListsService()