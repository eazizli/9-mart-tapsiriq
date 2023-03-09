var div=document.getElementById("yeni")
  var tableElement=document.createElement("table")
    var pElement=document.createElement("p")
    pElement.appendChild(tableElement)
    tableElement.appendChild(div)
    const person =[
        {
            name:"Elvin",
            surname:"Azizli",
            age:"20"
            
        },
        
        {
            name:"Anar",
            surname:"valiyev",
            age:"33"
            
            
        },
        {
            name:"Ferid",
            surname:"Evezov",
            age:"23"
        },
        {
            name:"Elnur",
            surname:"Xelilov",
            age:"34"
        }
    ]
    

     for(let i=0;i<person.length;i++){

        console.log(person[i])
     }
   
   //pElement.innerText=`${person.length. name}`

 
//console.log(pElement)


//  div.appendChild(tableElement)
//  tableElement.appendChild(thead)
//  var tag=document.createElement("th")
// thead.appendChild(tag)
// var metn=document.createTextNode("Name")
// console.log(metn)



