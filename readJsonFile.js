const apiEndpoint = "./jsonfile.json"
const display = document.querySelector("#display_data");

const getData = async () => {
    const res = await fetch(apiEndpoint)
    const data = await res.json();
    return data
}

const displayUsers = async () => {
    const payload = await getData();
    console.log(payload)
}

displayUsers();