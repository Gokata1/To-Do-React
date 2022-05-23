import { getData, setData } from "../localStorageController/localStorageControllers";

export default function filterTodos(){
    let filtered = getData().filter( todo => {
        return !todo.complete;
    });
    filtered = filtered.map( (todo, index) => {
        return {...todo, id: index+1};
    });
    setData(filtered);
    return(filtered);
}