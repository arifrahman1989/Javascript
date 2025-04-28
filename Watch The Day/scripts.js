let date = new Date();

let collect = date.getDate();

let dayNumber;

let quote;

switch(collect){
    case 0:
        dayNumber = 'Sunday';
        quote = 'This is chilly day';
        break;
    case 1:
        dayNumber = 'Sunday';
        quote = 'This is chilly day';
        break;
    case 2:
        dayNumber = 'Sunday';
        quote = 'This is chilly day';
        break;
    case 3:
        dayNumber = 'Sunday';
        quote = 'This is chilly day';
        break;
    case 4:
        dayNumber = 'Sunday';
        quote = 'This is chilly day';
        break;
    case 5:
        dayNumber = 'Sunday';
        quote = 'This is chilly day';
        break;
    case 6:
        dayNumber = 'Sunday';
        quote = 'This is chilly day';
        break;
}
    let span1 = document.getElementById('weekday');
        span1.innerHTML = `${dayNumber}`;

    let span2 = document.getElementById('quote');
        span2.innerHTML = `${quote}`;