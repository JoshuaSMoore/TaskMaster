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

createNewList(listItemid){
  event.preventDefault()
  let form = event.target

  let listItemData = {
    name: form.listName.value,
    color: form.colorPicker.value

  }
  listsService.createNewList(listItemData)
  form.reset()
  // @ts-ignore
  swal("Getrrr Done!!", {
    button: false,
  });
  

  }


  deleteListItem(id){
    let i = confirm("are you positive you want to get rid of this item?")
    if(i == true){
      listsService.deleteListItem(id)
      // @ts-ignore
      swal({
        icon: "success",
      });
    } else {}
    
  }

}



