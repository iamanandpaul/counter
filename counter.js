const count = document.querySelector("#count");
const lCount = document.querySelector("#lowcount");
const hCount = document.querySelector("#higcount");
const reset = document.querySelector("#reset");
let total = 0;

const counter = () => {
    total--;
    count.textContent = total;
    changeColor();
}

const counterr = () => {
    total++;
    count.textContent = total;
    changeColor();
}
const resett = () => {
    total = 0;
    count.textContent = total;
    changeColor();
}

lCount.addEventListener("click", counter);
hCount.addEventListener("click", counterr);
reset.addEventListener("click", resett);

const changeColor = () => {
    if (total>0){
        count.style.color = "green";
    }else if(total == 0){
        count.style.color = "black";
    }else {
        count.style.color = "red";
    }
}
