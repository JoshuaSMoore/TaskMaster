import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListsService{

  constructor(){
    ProxyState.on('listItems', saveState)
  }

  createNewList(listItemData, event){
    ProxyState.listItems = [...ProxyState.listItems, new List(listItemData)]
    // @ts-ignore
    Swal.fire({
      title: 'Sweet!',
      imageUrl: 'https://wallpapertag.com/wallpaper/full/0/e/0/652133-goku-blue-wallpapers-1920x1080-for-iphone.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
     
    console.log("we did it list service", ProxyState.listItems)
}

deleteListItem(listItemid){
  console.log('delete works!', listItemid)
  
  ProxyState.listItems = ProxyState.listItems.filter(l => l.id !== listItemid)

  ProxyState.todos = ProxyState.todos.filter(todos => todos.id !== listItemid)

  // @ts-ignore
  Swal.fire({
    icon: 'error',
    title: 'Later Gator!',
  })

}

}

export const listsService = new ListsService()