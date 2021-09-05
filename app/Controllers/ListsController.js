import {ProxyState} from "../AppState.js"
import {listsService} from "../Services/ListsService.js"
import {todoService} from "../Services/TodoService.js"




function _drawLists(){
  let template = ''
  ProxyState.listItems.forEach(l => template += l.Template)
  document.getElementById('new-list').innerHTML = template
}

export class ListsController {
  constructor(){
  ProxyState.on('listItems', _drawLists)
  ProxyState.on('todos', _drawLists)
  _drawLists()
}

createNewList(){
  event.preventDefault()
  let form = event.target

  let listItemData = {
    name: form.listName.value

  }
  listsService.createNewList(listItemData)
  form.reset()

  }


  deleteListItem(id){
    listsService.deleteListItem(id)
    
  }

}



