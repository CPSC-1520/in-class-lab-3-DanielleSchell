// Enter your code below.
// step 1
const divResources = document.querySelector('.javascript-resources');
const buttonShowResources = document.querySelector('#show-resources');

buttonShowResources.addEventListener('click', () => {
    divResources.classList.remove('d-none');
});

// step 2
divResources.addEventListener('mouseover', (event) => {
    console.log(event.target);
    event.target.classList.add('fw-bold');
});

// step 3
divResources.addEventListener('mouseout', (event) => {
    event.target.classList.remove('fw-bold');
});

// step 4
divResources.addEventListener('click', (event) => {
    event.target.classList.add('fst-italic');
});