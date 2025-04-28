function GenerateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
document.getElementById('genarotButton').addEventListener('click', 
function(){
    var min = 1;
    var max = 500;
    var randomNumber = GenerateRandomNumber(min, max);
    document.getElementById('result').textContent = randomNumber;

})