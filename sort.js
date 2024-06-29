const sortbutton=document.querySelector(".button")
const sortcontainer=document.querySelector(".sortcontainer")
const imagecontainer=document.querySelector(".imagecontainer")
const sorttag=document.querySelectorAll(".sort")

sorttag.forEach((apple)=>{
 apple.addEventListener("click",(event)=>{
    const idvalue=event.target.id
    if(idvalue==="ascending"){
       const banana=forsort.sort((a,b)=> a.uploadDate.getTime()- b.uploadDate.getTime())
       final(banana)
    }else{
       const melon=forsort.sort((a,b)=>b.uploadDate.getTime() - a.uploadDate.getTime())
       final(melon)
    }

 })
})

sortbutton.addEventListener("click",()=>{
    sortcontainer.style.display="block"
    if(sortcontainer.classList.contains("sortcon")){
        sortcontainer.style.display="none"
        sortcontainer.classList.remove("sortcon")
    }else{
        sortcontainer.classList.add("sortcon")
    }
    
})

const forsort=[
    {image:"./image/cheng.jpg",title:"Cheng Zheyuan",uploadDate:new Date(2023,10,15,12,59)},
    {image:"./image/jungkook.jpg",title:"Jung Kook",uploadDate:new Date(2023,10,4,15)},
    {image:"./image/v.jpg",title:"Kim Taeyuang",uploadDate:new Date(2023,10,12,2)},
    {image:"./image/yangyang.jpg",title:"Yang Yang",uploadDate:new Date(2023,10,16,5)},

]

const final=(water)=>{
    imagecontainer.innerHTML=""
    water.forEach((apple)=>{
        const image=`
        <div class="secondcontainer">
           <img src="${apple.image}" class="image"/>
           <div class="title">${apple.title}</div>
           <div>${apple.uploadDate.toLocaleDateString()}<div>
        </div>
    `;
    imagecontainer.innerHTML+=image
    })
}

final(forsort)