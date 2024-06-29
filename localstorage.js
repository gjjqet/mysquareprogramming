const cookieTag=document.querySelector('.cookie')

const fortoast=()=>{
    const containerdiv=document.createElement('div')
    containerdiv.classList.add("containerdiv")

    const text=document.createElement("div")
    text.append("We use cookies.You need to accept this")

    const button=document.createElement("div")
    button.append("Accept")
    button.classList.add("btn","btn-secondary")
    

    containerdiv.append(text,button)
    cookieTag.append(containerdiv)

    const forheight=containerdiv.offsetHeight
    containerdiv.style.bottom=`-${forheight}px`
    setTimeout(() => {
        containerdiv.style.bottom=0
    }, 100);

    button.addEventListener("click",()=>{
        containerdiv.style.bottom=`-${forheight}px`
        localStorage.setItem("accepted","1")
    })
}



window.addEventListener("load",()=>{
    const accept=localStorage.getItem("accepted")
    if(accept!=='1'){
        fortoast()
    }
    
})