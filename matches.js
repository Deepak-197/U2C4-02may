// write js code here corresponding to matches.html

// write js code here corresponding to matches.html
var schecdule=JSON.parse(localStorage.getItem("schedule"))||[]

// var fav=JSON.parse(localStorage.getItem("favourites"))
var fav=[]

displaydata(schecdule)

function displaydata(data){
    document.querySelector("tbody").innerHTML="";

    data.forEach(function(el){

        var tr=document.createElement("tr")

        var td1=document.createElement("td")
        td1.innerText=el.Mno
        var td2=document.createElement("td")
        td2.innerText=el.TeamA
        var td3=document.createElement("td")
        td3.innerText=el.TeamB
        var td4=document.createElement("td")
        td4.innerText=el.Date
        var td5=document.createElement("td")
        td5.innerText=el.Vanue
        var td6=document.createElement("td")
        td6.innerText="Add as Favourites"
        td6.style.color="green"
        td6.style.cursor="pointer";

        td6.addEventListener("click",function(){
            myclick(el)

        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    }) 

    function myclick(el){
        fav.push(el)
        localStorage.setItem("favourites",JSON.stringify(fav))

    }

    document.querySelector("#filterVenue").addEventListener("change",handlebranch)

    function handlebranch()
    {
        var select=document.querySelector("#filterVenue").value
        var filterList=schecdule.filter(function(el){
            return el.Vanue==select
        })
        displaydata(filterList)
    }
        
    
}






























