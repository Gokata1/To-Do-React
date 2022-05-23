import { getData, setData } from "../localStorageController/localStorageControllers";

export default function toggleTodos(todoId){
    let newData = getData().map( todo => {
      return todo.id === Number(todoId) ? {...todo, complete: !todo.complete} : {...todo};
    });
    setData(newData);
    return newData;
}