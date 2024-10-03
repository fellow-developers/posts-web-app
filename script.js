
const postApi = "https://jsonplaceholder.typicode.com/todos";

// Fetch API Function
async function fetchTodo(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}


// Append data in DOM 
async function appendData(data) {
    const container = document.querySelector('.append-titles');
    data.forEach((item) => {
        const newTitle = document.createElement('span');
        newTitle.innerHTML = item.title;
        container.appendChild(newTitle);
    });
}

// Helper function to store data from fetch function and pass on to appendData function
const getData = async () => {
    const data = await fetchTodo(postApi);
    await appendData(data);
}

window.onload = () => {
    const button = document.getElementById('fetch-api-button');
    button.addEventListener('click', getData);
}
