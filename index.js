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
        }
        
        if (isDeleting && j <= messagesArray[i].length) {
            currentMessage.pop(messagesArray[i][j]);
            j--
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




const card = [...document.getElementsByClassName('card')];
let radiotags = document.querySelector('.radio-tags');

function filteringFunction(filter) {
    for (let i = 0; i < card.length; i++) {
        card[i].classList.remove('hide');
        if(!card[i].classList.contains(filter)){
            card[i].classList.add('hide');
        }
    }
}

radiotags.addEventListener('change', (e)=> {
    switch (e.target.id) {
        case 'all':
            filteringFunction('card');
            break;
        case 'html':
            filteringFunction('html');
            break;
        case 'css':
            filteringFunction('css');
            break;
        case 'javascript':
            filteringFunction('javascript');
            break;
        case 'bootstrap':
            filteringFunction('bootstrap');
            break;
        case 'figma':
            filteringFunction('figma');
            break;
        case 'xd':
            filteringFunction('xd');
            break;
        case 'react':
            filteringFunction('react');
            break;
        case 'api':
            filteringFunction('api');
            break;
    
        default:
            break;
    }
});

