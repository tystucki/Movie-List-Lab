console.log('Hello Tys World')
const message = document.querySelector('#message')


const addMovie  = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('input')

const movie = document.createElement('li')

const movieTitle = document.createElement('span')

movieTitle.textContent = inputField.value;
movie.addEventListener('click', crossOffMovie);

movie.appendChild(movieTitle)
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'X';

document.querySelector('ul').appendChild(movie)
deleteBtn.addEventListener('click', deleteMovie)
movie.appendChild(deleteBtn);
inputField.value = '';
}


const deleteMovie = (event) => {
    message.textContent = 'Movie Deleted';
    revealMessage()
    event.target.parentNode.remove()
    `${event.target.parentNode} removed `
}



const crossOffMovie = (event) => {
    event.target.classList.toggle('checked');
    if (event.target.classList.contains('checked')){
        message.textContent = `You have watched ${event.target.textContent} already!`  
    } else {
        message.textContent = `${event.target.textContent} has been added back!`;
    }
    revealMessage()
}


const revealMessage = () => {
    message.classList.remove('hide');

    setTimeout(() => message.classList.add('hide'), 1000)
}

document.querySelector('form').addEventListener('submit', addMovie)







