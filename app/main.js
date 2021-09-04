import { ListsController } from "./Controllers/ListsController.js";
import { TodoController } from "./Controllers/TodoController.js"

// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
 listItemsController = new ListsController();
  todoController = new TodoController();
}

window["app"] = new App();
