const start=document.querySelector(".start")
const pause=document.querySelector(".pause")
const continueTag=document.querySelector(".continue")
const clock=document.querySelector('.clock')
const restart=document.querySelector(".restart")
const extra=document.querySelector(".extra")

let second=56
let minute=59
let hour=0

let mili=0

const formili=()=>{
    mili+=1

   extra.textContent=mili
}



const startTime=()=>{
    second+=1;
    if(second===60){
        second=0
        minute+=1;

        if(minute===60){
            minute=0
            hour+=1
        }

    }

    const secondtext=second<10?"0"+second.toString():second
    const minutetext=minute<10?"0"+minute.toString():minute
    const hourtext=hour<10?"0"+hour.toString():hour
    clock.textContent=hourtext+':'+minutetext+":"+secondtext
}

let intervalId
let secondinter
start.addEventListener("click",()=>{
    clearInterval(intervalId)
    clearInterval(secondinter)
    intervalId=setInterval(startTime,1000);
    secondinter=setInterval(formili,100);
    
})

pause.addEventListener("click",()=>{
    clearInterval(intervalId);
    clearInterval(secondinter)
})

continueTag.addEventListener("click",()=>{
    clearInterval(intervalId)
    clearInterval(secondinter)
    intervalId=setInterval(startTime,1000)
    secondinter=setInterval(formili,100)
})

restart.addEventListener("click",()=>{
    second=0,minute=0,hour=0
    mili=0
    clearInterval(secondinter)
    clearInterval(intervalId)
    intervalId=setInterval(startTime,1000)
    secondinter=setInterval(formili,100)
})
