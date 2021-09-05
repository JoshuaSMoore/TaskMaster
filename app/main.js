import { ListsController } from "./Controllers/ListsController.js";
import { TodoController } from "./Controllers/TodoController.js"
import {loadState} from "./Utils/LocalStorage.js"


class App {
 listItemsController = new ListsController();
  todoController = new TodoController();
}

loadState()

window["app"] = new App();
