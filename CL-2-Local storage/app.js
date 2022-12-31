const input = document.querySelector('.input');
const btn = document.querySelector('.button');
const list = document.querySelector('.list');


let arr = [];
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    // console.log(input.value);
    list.innerHTML +=  `<li>${input.value}</li><button class="delete">Delete</button>`

    arr.push(input.value);
    localStorage.setItem("input", JSON.stringify(arr));
    input.value = "";
})

window.addEventListener("load", (()=>{
    arr = JSON.parse(localStorage.getItem("input")) || []
    // console.log(arr);
    arr.forEach(element => {
       list.innerHTML += `<li>${element}</li><button class="delete">Delete</button>` 
    });
}))

const delbtn = document.querySelector(".list")

delbtn.addEventListener('click', (e)=>{
    // const del = document.querySelector('.delete');
    // console.log(del);
    console.log(e.target && e.target.previousSibling);
    let deltext = e.target.previousSibling.innerText;
    let index = arr.indexOf(deltext);
    arr.splice(index, 1);
    // console.log(arr);
    localStorage.setItem("input", JSON.stringify(arr))
    // console.log();
    // e.target.parentNode.remove()
    // e.target.previousSibling.remove()

    // list.innerHTML = "";
    arr = JSON.parse(localStorage.getItem('input'))


})