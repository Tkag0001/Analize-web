const apiEndpoint = "./jsonfile.json"
const display = document.querySelector("#display_data");

const getData = async () => {
    const res = await fetch(apiEndpoint)
    const data = await res.json();
    return data;
}
let dataJson;
const displayUsers = async () => {
    const payload = await getData();
    dataJson = payload;
    console.log(payload)
}

displayUsers();