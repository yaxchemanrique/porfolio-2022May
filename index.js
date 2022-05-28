const textDisplay = document.getElementById('typing-text');
const messagesArray = ['developer.', 'designer.'];

let i = 0;
let j = 0;
let currentMessage = [];
let isDeleting = false;
let isEnd = false;

function loop() {
    isEnd = false;
    textDisplay.innerHTML = currentMessage.join('');

    if(i < messagesArray.length) {

        if (!isDeleting && j <= messagesArray[i].length) {
            currentMessage.push(messagesArray[i][j]);
            j++
            console.log('add a letter', j);
        }
        
        if (isDeleting && j <= messagesArray[i].length) {
            currentMessage.pop(messagesArray[i][j]);
            j--
            console.log('remove letter', j);
        }

        if (j == messagesArray[i].length){
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentMessage = [];
            isDeleting = false;
            i++;

            if(i == messagesArray.length){
                i = 0;
            }
        }

    }
    const spedUp = Math.random() * (200 - 100) + 100;
    const normalSpeed = Math.random() * (450 - 350) + 350;
    const time = isEnd ? 500 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
}

const currentYear = new Date().getFullYear();

document.getElementById('year').innerHTML = currentYear + ' ';

loop();




const card = document.getElementsByClassName('card');
let containsHtml = card.classList.contains('html');
let containsCss = card.classList.contains('css');
let containsJs = card.classList.contains('javascript');
let containsBootstrap = card.classList.contains('bootstrap');
let containsFigma = card.classList.contains('figma');
let containsXd = card.classList.contains('xd');



