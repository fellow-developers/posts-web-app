async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        return json
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

 async function appendData() {
    const data =  await fetchTodo();
    await data.forEach((item) => {
        const container = document.querySelector('.append-titles')
        const newTitle = document.createElement('span')
        newTitle.innerHTML =  item.title;
        container.appendChild(newTitle)
    })
}

window.onload = () => {
    const button = document.getElementById('fetch-api-button');
    button.addEventListener('click',  appendData)
}
