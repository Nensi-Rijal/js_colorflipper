const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById('click_btn');
const color = document.querySelector('.selected_color');

button.addEventListener('click', function(){
    let hexColor = '#';
    for(let i =0; i < 6; i++){
        let randomNumbers = generateRandomNumber();
        hexColor += hex[randomNumbers];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

const generateRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
}