let setUser = document.getElementById("set")
let getUser = document.getElementById("get")
let removeUser = document.getElementById("remove")

let name = document.getElementById("name")
let surname = document.getElementById("surname")

let person = {
    name:"Resul",
    surname:"Samedov"
} 



setUser.addEventListener("click",function(){
    let myDataFromObjectToString = JSON.stringify(person)
    localStorage.setItem("mydata",myDataFromObjectToString)
    localStorage.setItem("LoggedInUser",JSON.stringify(
        [{
        name:"Abbas",
        age:28
        },{
        favorites:[{_id:Math.random(), name:"product1"},
        {_id:Math.random(), name:"product2"}]
        }]
    ))
})

getUser.addEventListener("click",function(){
    let receivedDta = localStorage.getItem("mydata")
    console.log(receivedDta)
    let parsedData = JSON.parse(receivedDta)
    console.log(parsedData)
    name.innerText = parsedData.name
    surname.innerText = parsedData.surname 
})

removeUser.addEventListener("click",function(){
    localStorage.removeItem("mydata")
    localStorage.removeItem("LoggedInUser")
})

