import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListsService{

  constructor(){
    ProxyState.on('listItems', saveState)
  }

  createNewList(listItemData, event){
    ProxyState.listItems = [...ProxyState.listItems, new List(listItemData)]
    swal({
      icon: "success",
    });
    console.log("we did it list service", ProxyState.listItems)
}

deleteListItem(listItemid){
  console.log('delete works!', listItemid)
  
  ProxyState.listItems = ProxyState.listItems.filter(l => l.id !== listItemid)

  ProxyState.todos = ProxyState.todos.filter(todos => todos.id !== listItemid)

  swal({
    buttons: {
      cancel: true,
      confirm: "Confirm",
      roll: {
        text: "Do a barrell roll!",
        value: "roll",
      },
    },
  });

}

}

export const listsService = new ListsService()