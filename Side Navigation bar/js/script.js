// let toggleMenuStatus = false;

// let toggleName = function () {

//     let getMenu = document.querySelector(".menu");
//     let getMenuUI = document.querySelector(".menu ul");
//     let getMenuTitle = document.querySelectorAll(".menu span");
//     let getMenuLinks = document.querySelectorAll(".menu a");


//     if (toggleMenuStatus === false) {
//         getMenuUI.style.visibility = "visible";
//         getMenuUI.style.opacity = "0.5";


//         let arrayLength = getMenuLinks.length;
//         for (let i = 0; i < arrayLength; i++) {
//             getMenuLinks[i].style.opacity = "1";

//         }

//         toggleMenuStatus = true;
//     }

//     else if (toggleMenuStatus === true) {

//         getMenuUI.style.opacity = "0";

//         let arrayLength = getMenuLinks.length;
//         for (let i = 0; i < arrayLength; i++) {
//             getMenuLinks[i].style.opacity = "0";

//         }
//         getMenuUI.style.visibility = "hidden";

//         toggleMenuStatus = false;
//     }






const $=(e)=>{
    return document.querySelector(e)
}
const _=(el)=>{
    return document.querySelectorAll(el)
}

// memu toggle function


const togglefun=()=>{
    if($('.menu').style.width=='210px'){
        $('.menu').style.width='40px';
        for (i=1;i<6;i++){
            $(`.list-${i}`).style.display='none';
            console.log(i)
        }

    }else{
        $('.menu').style.width='210px';

         for (i=1;i<6;i++){
            $(`.list-${i}`).style.display='block';
        }

    }
}
$('.toggle').addEventListener('click',togglefun)


togglefun()
// Catagory function

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


