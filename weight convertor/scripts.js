const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();

    const input = document.querySelector('input');
    const converteweight = document.querySelector('span');
    let kgTopound;

    if((isNaN(input.value)) || input.value <= 0){
        converteweight.classList.add('error');
        converteweight.innerHTML = "<p>Please enter a valid number</p>"

        setTimeout(()=>{
            converteweight.innerHTML = '';
            converteweight.classList.remove('error');
        }, 2500);
        input.value = '';
    }else{
        kgTopound = Number(input.value) * 2.20462;
        converteweight.classList.add('successfull');
        converteweight.innerHTML = `${kgTopound.toFixed(3)}`;

        setTimeout(()=>{
            converteweight.innerHTML = '';
            converteweight.classList.remove('successfull');
            input.value = '';
        }, 10000);
    }


});