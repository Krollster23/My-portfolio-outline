document.getElementById("count-el").innerText = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let verify = document.getElementById("pushput").value;
let inputVal = increment.value;
let count = 0;

 function increase() {
    if (countEl.textContent >= 250) {
        alert('The train is full.')
    } else {
        console.log(verify);
        count += parseInt(inputVal);
        countEl.textContent = count;        
    }
 }

function decrease() {
    if(count <= 0) {
        alert("You can't do that!");
    } else {
        count -= parseInt(inputVal);
        countEl.textContent = count;
    }
 }

 function save() {
    if (count <= 0) {
        alert('0 and negatives cannot board trains.');
    } else {
     let countstr = count + " - ";
     saveEl.textContent += countstr
     countEl.textContent = 0
     count = 0
    }
 }
