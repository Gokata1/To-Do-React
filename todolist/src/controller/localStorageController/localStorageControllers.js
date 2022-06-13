const getData = () => {
    return JSON.parse(localStorage.getItem("data"));
}

const setData = (newData) => {
    localStorage.setItem("data", JSON.stringify(newData));
}

const createData = ()=>{
    localStorage.setItem("data",JSON.stringify([]));
}

module.exports = {getData, setData, createData};