const buttonTag=document.querySelector(".btn")
const toastalertcontainer=document.querySelector(".toastalertcontainer")

buttonTag.addEventListener("click",()=>{
    toastalertcontainer.innerHTML=""
    const creatdiv=document.createElement("div")
    creatdiv.append('Your file has been uploaded')
    creatdiv.classList.add('creatdiv')
    toastalertcontainer.append(creatdiv)

    creatdiv.style.bottom=`-${creatdiv.offsetHeight}px`
    
    setTimeout(() => {
        creatdiv.style.bottom=0;
        setTimeout(() => {
            creatdiv.style.bottom=`-${creatdiv.offsetHeight}px`
        }, 3000);
    }, 100);
    
})

/* 
  
 */