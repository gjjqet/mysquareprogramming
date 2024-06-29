const url="https://fakestoreapi.com/products"
const inputTag=document.querySelector(".input")
const productcontainerTag=document.querySelector(".productcontainer")
const extraTag=document.querySelector(".extra")

let product
fetch(url).then((respone)=>{
    const datafromsever=respone.json()
    return datafromsever
}).then((data)=>{
   product=data
  
   inputTag.disabled=false
}).catch((error)=>{
    console.log(error)
})

console.log(product)


    let filterarray=[]
inputTag.addEventListener("keyup",(event)=>{
    if(event.key==="ArrowDown"||
       event.key==="ArrowUp"||
       event.key==="Enter"
       ){
        final(event.key)
        return
       }
    productcontainerTag.innerHTML=""
    const searchtext=event.target.value
    if(searchtext.length===0){
        return
    }

    filterarray=product.filter((thing)=>{
        return thing.title.toLowerCase().includes(searchtext)
    })

    

    const hasproduct=filterarray.length > 0
    
    if(hasproduct===true){
       
        for(let i=0;i<filterarray.length;i++){
            const parentdiv=document.createElement('div')
            parentdiv.classList.add("parentdiv")
            parentdiv.id=filterarray[i].id
            
            

            const title=document.createElement("div")
            title.append(filterarray[i].title)
            title.classList.add("title")

            const image=document.createElement("img")
            image.src=filterarray[i].image
            image.classList.add("image")

            parentdiv.append(title,image)
            productcontainerTag.append(parentdiv)
        }
    }
})

let forindex=-1
const final=(key)=>{
    if(key==="ArrowDown"){

        if(forindex===filterarray.length-1){
            deleted()
            forindex=-1;
            return
        }


     forindex+=1
     
     const takendiv=selected(forindex)
     if(forindex>0){
        deleted()
     }
     takendiv.classList.add("selected")   
    }else if(key==="ArrowUp"){
        if(forindex===-1){
            return
        }
        if(forindex===0){
            deleted()
            forindex=-1;
            return
        }
        forindex-=1;
        deleted()
        const takendiv=selected(forindex)
        takendiv.classList.add("selected")

    }else{
        const takenid=filterarray[forindex].id;
        const takendiv=document.getElementById(takenid)
        takendiv.style.display='none'

        const total=document.createElement("div")
        total.classList.add("total")

        const secondtitle=document.createElement('div')
        secondtitle.append(filterarray[forindex].title)
        secondtitle.classList.add("secondtitle")

        const secondimage=document.createElement("img")
        secondimage.src=filterarray[forindex].image
        secondimage.classList.add("secondimage")

        total.append(secondtitle,secondimage)
        extraTag.append(total)
        
}}

const deleted=()=>{
    const fordeleted=document.getElementsByClassName("selected")[0];
    fordeleted.style.backgroundColor="white";
    fordeleted.style.color="black";
    fordeleted.classList.remove("selected");
}

const selected=(forindex)=>{
    const takenid=filterarray[forindex].id
     const takendiv=document.getElementById(takenid)
     takendiv.style.backgroundColor="blue";
     takendiv.style.color="white";
     return takendiv
}


