const modal = document.querySelector(".modal")
const first = document.querySelector(".first")


first.addEventListener("click",(() => {
    // if (modal.style.display == "none") {
        modal.style.display = "flex"

    // }

}))
first.addEventListener("mouseout",(()=>{
            // if(modal.style.display == "flex"){
                modal.style.display = "none"
            // }
}))

// function open(){
//     modal.style.display= 'flex'
// }
// function close(){
//     modal.style.display= 'none'
// }

// first.addEventListener('click', open);
// first.addEventListener('mouseout', close)