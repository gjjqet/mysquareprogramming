const menucontainer=document.querySelector(".menucontainer")
const box1=document.querySelector(".box1")
const box2=document.querySelector(".box2")
const box3=document.querySelector(".box3")
const extra=document.querySelector(".extra")
const litag=document.getElementsByTagName("li")

menucontainer.addEventListener("click",()=>{
    if(menucontainer.classList.contains("menu")){
        box2.classList.remove("removebox2")
        box1.classList.remove("changebox1")
        box3.classList.remove("changebox3")
        menucontainer.classList.remove("menu")
        extra.classList.remove("extracontainer")
        for(let i=0;i<litag.length;i++){
            litag[i].classList.remove("removelitag")
        }
    }else{
        box2.classList.add("removebox2");
        box1.classList.add("changebox1");
        box3.classList.add("changebox3")
        menucontainer.classList.add("menu")
        extra.classList.add("extracontainer")

       for(let i=0;i<litag.length;i++){
        litag[i].classList.add("removelitag")
       }
    }
    
})