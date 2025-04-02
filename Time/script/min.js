// DOM ELEMENT

const time = document.querySelector('#time'),
    greeting = document.querySelector('#greetting'),
    name = document.querySelector('#name'),
    fucus = document.querySelector('#fucus');




// sow time

function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

//set AM or PM

const amPm = hour >= 12 ? 'AM' : 'PM';

// 12 hour format

hour = hour % 12 || 12;

// output time

time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

setTimeout(showTime, 1000);
}

// add Zero

function addZero(n) {
    return(parseInt(n, 10) < 10 ? '0' : '') + n;
}


// Change Background
function setBgGreet() {
    let today = new Date();
    hour = today.getHours();

    if(hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('images/img1.jpg')";
        greeting.textContent = 'Good Morning';

    } else if(hour < 20) {
        // Afternoon
        document.body.style.backgroundImage = "url('images/img2.jpg')";
        greeting.textContent = 'Good Afternoon';

    } else {
        // Evening
        document.body.style.backgroundImage = "url('images/img3.jpg')";
        greeting.textContent = 'Good Evening';

    }
}
// Get Name
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    }else {
        name.textContent = localStorage.getItem('name');
    }
}
// run 

showTime();
setBgGreet();
getName();
