/*
  login()
  fetchdata()
  username()
  userphto()
  showhomefeed()
 */

const login=()=>{
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        resolve("I'm log in")
       }, 3000);
    })
}

const fetchdata=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("I'm fetchdata")
        }, 3000);
    })
}

const username=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("I'm user name reject")
        }, 2000);
    })
}

const userphto=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("I'm user photo")
        }, 2000);
    })
}

const showhomefeed=(show)=>{
    console.log(show,"I'm showhomefeed")
}

const final=async()=>{
   
        const forlogin=await login()
        console.log(forlogin)
        const forfetchdata=await fetchdata()
        console.log(forfetchdata)
        const forusername=await username()
        console.log(forusername)
        const foruserphoto=await userphto()
        console.log(foruserphoto)
        showhomefeed(foruserphoto)
   
}

final().catch((error)=>{
    console.log(error)
})