import { getData, setData } from "../localStorageController/localStorageControllers";

export default function addNewTodo(todoValue) {
    let data = getData();
    const newTodo = {
        "id": data.length+1,
        "task": todoValue,
        "complete": false
    }
    data.push(newTodo);
    setData(data);
    return data;
}