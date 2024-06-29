const listcontainer=["All","Image Change","Video Property","About Us"]
const orderlist=document.querySelector(".orderlist")
const menubar=document.querySelector(".menubar")

for(let i=0;i<listcontainer.length;i++){
    const creatdiv=document.createElement("li")
    creatdiv.classList.add("creatdiv")
    creatdiv.append(listcontainer[i])
    orderlist.append(creatdiv)
    if(i===0){
        const apple=creatdiv.offsetWidth
        menubar.style.width=`${apple}px`

    }

    creatdiv.addEventListener("click",()=>{
        const forwidth=creatdiv.offsetWidth
        const forleft=creatdiv.offsetLeft
        console.log(forleft)
       
        menubar.style.width=`${forwidth}px`;
        menubar.style.transform=`translateX(${forleft}px)`
    }
        )}
