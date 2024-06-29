const button=document.querySelector(".click")
const transition=document.querySelector(".transition")
const secondclick=document.querySelector(".secondclick")
const transform=document.querySelector(".transform")

button.addEventListener("click",()=>{
    transition.classList.add("changetransition")
})

secondclick.addEventListener("click",()=>{
    transform.classList.add("changetransform")
})