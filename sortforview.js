const buttoncontainer=document.querySelector(".buttoncontainer")
const sortcontainer=document.querySelector(".sortcontainer")
const imagecontainer=document.querySelector(".imagecontainer")
const sorttag=document.querySelectorAll(".sort")

sorttag.forEach((orange)=>{
    orange.addEventListener("click",(event)=>{
        const idvalue=event.target.id
        if(idvalue==="ascending"){
            const forascending=images.sort((a,b)=>a.view-b.view)
                final(forascending)
        }else{
            const fordescending=images.sort((a,b)=>b.view-a.view)
            final(fordescending)
        }
    })
})

buttoncontainer.addEventListener("click",()=>{
    sortcontainer.style.display="block"
    if(sortcontainer.classList.contains("apple")){
        sortcontainer.style.display="none"
        sortcontainer.classList.remove("apple")
    }else{
        sortcontainer.classList.add("apple")
    }
    
})

const images=[{image:"https://www.themoviedb.org/t/p/original/xNxgskyAM9mtrusbXL7j03Askpa.jpg",title:"I love you lusi",uploadDate:new Date(2023,5,15,3,20,15),view: 1400},
{image:"https://wallpapercave.com/wp/wp7391050.jpg",title:"I love you Yang Zi",uploadDate:new Date(2023,5,9,9,20,15),view: 1000},
{image:"https://images.lifestyleasia.com/wp-content/uploads/sites/6/2023/08/21181242/best-zhao-lusi-dramas-chinese-tv-shows-hidden-love-the-roance-of-tiger-and-rose-dating-in-the-kitchen-rosy-zhao.jpg",title:"I love you Jung Kook",uploadDate:new Date(2023,5,12,6,20,15),view: 1200},
{image:"https://i.pinimg.com/236x/87/cb/ce/87cbce3bfb540de34c6c4661e4f523e6.jpg",title:"I love you Xing Xing",uploadDate:new Date(2023,5,19,2,20,15),view: 900}

]

const final=(pear)=>{
    imagecontainer.innerHTML=""
    images.forEach((apple)=>{
        const addimage=`
          <div class="secondimagecontainer">
             <img src="${apple.image}" class="image"/>
             <div class="title">${apple.title}"</div>
             <div class="title">${apple.uploadDate.toLocaleDateString()}</div>
             <div class="title">${apple.view}</div>
          </div>
        `;
     
        imagecontainer.innerHTML+=addimage
     
     })
}

final(images)

