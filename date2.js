const buttonTag=document.querySelector(".button")

const myowndate=new Date(2023,11,16,12,45,55)

const currentDate=new Date()
const gettime=currentDate.getMinutes()
currentDate.setMinutes(gettime+10)

const orange=currentDate.getTime()
console.log(orange)
const pear=myowndate.getTime()
console.log(pear)

if(orange>pear){
    buttonTag.style.display="none"
}