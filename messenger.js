const bar1=document.querySelector(".bar1")
const bar2=document.querySelector('.bar2')
const bar3=document.querySelector(".bar3")
const barcontainer=document.querySelector(".barcontainer")
const extracontainer=document.querySelector(".extracontainer")
const maincontainer=document.querySelector(".maincontainer")
const footer=document.querySelector(".footer")

const linkarray=[
    {link:"https://www.messenger.com/features",name:'Feature'},
    {link:"https://www.messenger.com/desktop",name:"Desktop"},
    {link:"https://www.messenger.com/privacy",name:"Privacy and safety"},
    {link:"https://developers.facebook.com/products/messenger/",name:"For Developer"}
]
linkarray.forEach((ban)=>{
    const orange=`
       <div class="percontainer">
           <div><a href=${ban.link} class="per">
              <span>${ban.name}</span>
           <a/></div>
       </div>
    `;
    extracontainer.innerHTML+=orange
})

barcontainer.addEventListener("click",()=>{
    if(barcontainer.classList.contains("pear")){
        bar2.classList.remove("hidebar2")
        bar1.classList.remove("bar1change")
        bar3.classList.remove("bar3change")
        barcontainer.classList.remove("pear")

        
        extracontainer.style.display="none"
        footer.style.display="block"
    }else{
        bar2.classList.add("hidebar2")
        bar1.classList.add("bar1change")
        bar3.classList.add("bar3change")
        barcontainer.classList.add("pear")

       
         extracontainer.style.display="block"
        footer.style.display="none"
    }
})