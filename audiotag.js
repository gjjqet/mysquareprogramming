const titlecontainer=[{title:"I just wanna hide you Hidden Love ost",source:"music/[Hanzi-Pinyin-English-Indo] Zhao Lusi & Silence Wang-只想把你偷偷藏好 I Just Wanna Hide You[Hidden Love OST].mp3"},
{title:"Milk and Bread Go Go Squit ost",source:"music/Yang Zi (楊紫) - Milk Bread (牛奶面包) [Go Go Squid (親愛的，熱愛的) OST].mp3"},
{title:"3D by Jung KooK Harvey",source:"music/정국 (Jung Kook) '3D (feat. Jack Harlow)' Official MV.mp3"},
{title:"Angle Baby by Taylor Swift",source:"music/Troye Sivan - Angel Baby (Official Video).mp3"},
{title:"Shake it off by Justin Bieber",source:"music/Taylor Swift - Shake It Off.mp3"}
]

const songcontainer=document.querySelector(".songcontainer")
const audiotag=document.querySelector('.audiotag')
const time=document.querySelector('.time')
const currentprogress=document.querySelector(".currentprogress")
const previousbutton=document.querySelector(".previous")
const playbutton=document.querySelector(".play")
const pausebutton=document.querySelector(".pause")
const nextbutton=document.querySelector('.next')

for(let i=0;i<titlecontainer.length;i++){
    const titlediv=document.createElement('div')
    titlediv.classList.add("titlediv")

    const fortitle=(i+1)+". "+titlecontainer[i].title
    titlediv.append(fortitle)

    songcontainer.append(titlediv)

    titlediv.addEventListener("click",()=>{
        audiotag.src=titlecontainer[i].source
        audiotag.play()
        apple=i
    })
}
let finalduration="00:00"
let forduration
audiotag.addEventListener("loadeddata",()=>{
    forduration=Math.floor(audiotag.duration)
    finalduration=fortime(forduration)
      
    isplaying=true
    forplayandpause()
    
})

let forcurrenttime
audiotag.addEventListener("timeupdate",()=>{
    forcurrenttime=Math.floor(audiotag.currentTime)
    const finalcurrenttime=fortime(forcurrenttime)

    const totaltime=finalcurrenttime+"/"+finalduration
    time.textContent=totaltime

    const currentforwidth=500/forduration*forcurrenttime
    currentprogress.style.width=currentforwidth+'px'

   
    
})

const fortime=(final)=>{
    const minute=Math.floor(final/60)
    const second=final%60
    
    const minutetext=minute<10?"0"+minute.toString():minute
    const secondtext=second<10?"0"+second.toString():second

    const totaltext=minutetext+":"+secondtext
    return totaltext
}

let apple=0
let isplaying=false
playbutton.addEventListener("click",()=>{
   const currenttime=Math.floor(audiotag.currentTime)
   isplaying=true
   if(currenttime===0){
        audiotag.src=titlecontainer[apple].source
        audiotag.play()
        
        forplayandpause()
   }else{
    audiotag.play()
    forplayandpause()
   }
        
    
}
)

pausebutton.addEventListener("click",()=>{
    isplaying=false
    audiotag.pause()
    forplayandpause()
    
})

const forplayandpause=()=>{
    if(isplaying===true){
        playbutton.style.display="none"
        pausebutton.style.display="inline"
    }else{
       
        pausebutton.style.display="none"
        playbutton.style.display="inline"
    }
}

previousbutton.addEventListener("click",()=>{
    if(apple===0){
        return
    }
    apple-=1
    audiotag.src=titlecontainer[apple].source
    audiotag.play()
    
})

nextbutton.addEventListener('click',()=>{
    if(apple===titlecontainer.length-1){
        return
    }
    apple+=1
    audiotag.src=titlecontainer[apple].source
    audiotag.play()
})

