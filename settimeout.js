const button=document.querySelector(".button")
const colorcontainer=document.querySelector(".colorcontainer")

button.addEventListener("click",()=>{
    colorcontainer.style.backgroundColor="violet"
    setTimeout(() => {
        colorcontainer.style.backgroundColor="green"
    }, 1000);
    setTimeout(() => {
        colorcontainer.style.backgroundColor="yellow"
    }, 2000);
    setTimeout(() => {
        colorcontainer.style.backgroundColor="blue"
    }, 3000);
    setTimeout(() => {
        colorcontainer.style.backgroundColor="pink"
    }, 4000);
    

    
})