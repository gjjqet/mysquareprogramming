const shoppinglist=document.querySelector(".shoppinglist")
const input=document.querySelector('input')

let apple=0
input.addEventListener("change",(event)=>{
    apple+=1
    const trashcontainer=document.createElement("div")
    trashcontainer.classList.add("trashcontainer")
    const value=event.target.value
    const product=document.createElement('div')
    product.classList.add('product')
    product.append(apple.toString()+". "+value)

    const trash=document.createElement("i")
    trash.classList.add("fa-solid","fa-trash-arrow-up")

    trashcontainer.append(product,trash)
    shoppinglist.append(trashcontainer)
    input.value="";

    product.addEventListener("click",()=>{
        if(product.classList.contains("line")){
           product.classList.remove("line")
        }else{
            product.classList.add('line')
        }
    })

    trash.addEventListener("click",()=>{
        trashcontainer.remove()
    })
})
