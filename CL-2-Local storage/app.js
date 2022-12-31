const input = document.querySelector('.input');
const btn = document.querySelector('.button');
const list = document.querySelector('.list');


let arr = [];
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(input.value);
    list.innerHTML +=  `<li>${input.value}<button id="delete">Delete</button></li>`

    arr.push(input.value);
    localStorage.setItem("input", JSON.stringify(arr));
    input.value = "";
})

window.addEventListener("load", (()=>{
    arr = JSON.parse(localStorage.getItem("input")) || []
    console.log(arr);
    arr.forEach(element => {
       list.innerHTML += `<li>${element}<button id="delete">Delete</button></li>` 
    });
}))