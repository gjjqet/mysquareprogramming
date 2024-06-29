const city=[
    {
        name:"Mandalay",
        population:"60million",
        capital:"Mandalay",
        region:"Sagaing"
    },{
        name:"Yangon",
        population:"80million",
        capital:"Yangon",
        region:"Nay Pui Taw"
    }
]

const forjsonstring=JSON.stringify(city)
console.log(forjsonstring)

localStorage.setItem("array",forjsonstring)
const get=localStorage.getItem("array")

const orginal=JSON.parse(get)
console.log(orginal[1].population)