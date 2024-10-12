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
function appendData(data) {
    const container = document.querySelector('.post-container');
    data.forEach((item) => {
        const newTitle = document.createElement('div');
        newTitle.className = 'post';
        newTitle.innerHTML = item.title;
        newTitle.addEventListener('click', (e) => {

        showClickedPost(e.target);
        backButton();
        
    });
        container.appendChild(newTitle);
    });
}

function showClickedPost(clickedPost) {
    const posts =  document.querySelectorAll('.post');
    posts.forEach((post) => {
        post.classList.add('hidden');
        clickedPost.classList.remove('hidden')
        document.querySelector('.back-button').classList.remove('hidden')
    });
}

function backButton() {
    const btn = document.querySelector('.back-button');
    const posts =  document.querySelectorAll('.post');
    btn.addEventListener('click', () => {
        posts.forEach((post) => {
            post.classList.remove('hidden')
            btn.classList.add('hidden');
        });
    })
}

// Helper function to store data from fetch function and pass on to appendData function
async function clickHandler() {
    const data = await fetchTodo(postApi);
    appendData(data);
}


window.onload = () => {
    const button = document.getElementById('fetch-api-button');
    button.addEventListener('click', clickHandler);
}
