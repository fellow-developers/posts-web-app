async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        json.forEach((item) => {
            const container = document.querySelector('.append-titles')
            const newTitle = document.createElement('span')
            newTitle.innerHTML =  item.title;
            container.appendChild(newTitle)
            
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}


const button = document.getElementById('fetch-api-button');
button.addEventListener('click', () => fetchTodo())