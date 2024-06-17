const hexColors = [
    '#a38e34', '#c84e95', '#1fedc4', '#08cce4', '#1a00b8',
    '#c8a313', '#39386a', '#6a375c', '#13ee80', '#2e80ff',
    '#cbe887', '#ed999d', '#a557e1', '#bd62fc', '#8b66da',
    '#fed199', '#06857f', '#58c6f9', '#795574', '#c15974',
    '#e7aa44', '#036505', '#6d1ee0', '#e48e33', '#7e7bb2',
    '#06237e', '#96cc38', '#bcadca', '#765d91', '#6f8351',
    '#a586ca', '#c93fe2', '#a8e2b4', '#992503', '#931e12',
    '#3544dc', '#1a8e85', '#6f7ecd', '#0fc91a', '#a7b16d',
    '#6d307a', '#e98fee', '#19a97b', '#d106ad', '#cab3ed',
    '#560cda', '#a6872a', '#ba122b', '#2afa08', '#b2f9c7'
];


const button = document.getElementById("click_btn");
const color = document.querySelector('.selected_color');
button.addEventListener('click', function(){
    const randomNumber = getRandomNumbers();
    color.textContent =  hexColors[randomNumber];
    document.body.style.backgroundColor = hexColors[randomNumber];
})

const getRandomNumbers = () => {
    return Math.floor(Math.random() * hexColors.length);
}