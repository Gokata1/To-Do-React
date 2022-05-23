const getData = () => {
    return JSON.parse(localStorage.getItem("data"));
}

const setData = (newData) => {
    localStorage.setItem("data", JSON.stringify(newData));
}

module.exports = {getData, setData};