const click=document.querySelector(".click")
const commentcontainer=document.querySelector(".commentcontainer")
const text=document.querySelector(".text")

let valuepop
let apple=1
text.addEventListener("change",(event)=>{
    valuepop=event.target.value
})


click.addEventListener("click",()=>{
    text.value=""
    const creatdiv=document.createElement("div")
    creatdiv.classList.add("creatdiv")
    creatdiv.append(valuepop)

    commentcontainer.append(creatdiv)

    localStorage.setItem("click",valuepop)

    localStorage.setItem("apple","1")
  

})

console.log(commentcontainer)

const orange=localStorage.getItem("click")
const pear=localStorage.getItem("apple")
console.log(orange)
console.log(valuepop)


const final=()=>{
    
    if(pear!=="1"){
        return
       
    }else{
        const forvalue=document.createElement("div")
        forvalue.append(orange)
        forvalue.classList.add("creatdiv")
        commentcontainer.append(forvalue)
    }
}

final()
 