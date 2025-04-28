window.onload = function(){   
    let hour = 0;
    let min = 0;
    let second = 0;

    let interval;



    const addHour = document.querySelector('.hour');
    const addMin = document.querySelector('.min');
    const addSeconds = document.querySelector('.second');
    

    const startbtn = document.querySelector('.start');
    const stopbtn = document.querySelector('.stop');
    const resetbtn = document.querySelector('.reset');


    startbtn.onClick = function(){
        clearInterval(interval);
        interval = setInterval(start, 10);
    }

    stopbtn.onClick = function(){
        clearInterval(interval);
    }

    resetbtn.onClick = function(){
        clearInterval(interval);
        second = 0;
        min = 0;
        hour = 0;
        addSeconds.innerHTML = '00';
        addMin.innerHTML = '00';
        addHour.innerHTML = '00';
        
    }

    function start(){
        second++;

        if(second < 10){
            addSeconds.innerHTML = `0${second}`;
        }else{
            addSeconds.innerHTML = second;
        }

        if(min > 59){
            min++;
            addMin.innerHTML = min < 10 ? `0${min}` : min;
            second = 0;
            addSeconds.innerHTML = '00';
        }

        if(hour > 59){
            hour;
            addHour.innerHTML = hour < 59 ? `0${hour}` : hour;
            min = 0;
            addMin.innerHTML = '00';
        }
    }


};
