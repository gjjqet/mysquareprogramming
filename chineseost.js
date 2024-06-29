const listcontainer=["Form","Nature","National costume","Chinese Music","History"]
const orderlist=document.querySelector(".orderlist")
const menubar=document.querySelector(".menubar")
const form=document.querySelector(".form")
const nature=document.querySelector(".nature")
const costume=document.querySelector(".costume")
const music=document.querySelector(".music")
const history=document.querySelector(".history")

for(let i=0;i<listcontainer.length;i++){
    const listdiv=document.createElement('li')
    listdiv.append(listcontainer[i])

    orderlist.append(listdiv)
    if(i===0){
       menubar.style.width=listdiv.offsetWidth+"px";
            form.style.display="block"
       
    }

    listdiv.addEventListener("click",()=>{
        const forwidth=listdiv.offsetWidth;
        const forleft=listdiv.offsetLeft;

        menubar.style.width=`${forwidth}px`
        menubar.style.transform=`translateX(${forleft}px)`;

        if(i===0){
            form.style.display="block"
            nature.style.display="none";
            costume.stlye.display="none";
            music.stlye.display="none";
            history.stlye.display="none"
        }else if(i===1){
            nature.style.display="block";
            form.style.display="none";
            costume.style.display="none";
            music.style.display="none";
           history.style.display="none"
        }else if(i===2){
            costume.style.display="block"
            form.style.display="none"
            nature.style.display="none"
            music.style.display="none"
            history.style.display="none"
        }else if(i===3){
            costume.style.display="none"
            form.style.display="none"
            nature.style.display="none"
            music.style.display="block"
            history.style.display="none"
        }else{
            costume.style.display="none"
            form.style.display="none"
            nature.style.display="none"
            music.style.display="none"
            history.style.display="block"
        }
    })

}