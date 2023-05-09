const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click',function(){
    //Random Number Between 0 - 3 (Array Index)
    const randomNumber = Math.floor(getRandomNumber()*10)%4;
    console.log(randomNumber);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];

});
function getRandomNumber(){
    return Math.random();    
}
color.addEventListener('click',function(){
    navigator.clipboard.writeText(color.textContent);
    swal('Good job!','Copied Successfully','success');
})