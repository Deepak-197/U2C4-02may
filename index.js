// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit",mysubmit)

var schecdule= JSON.parse(localStorage.getItem("schedule")) ||[]

function mysubmit(){

    event.preventDefault()
    var sobj={
        Mno:masaiForm.matchNum.value,
        TeamA:masaiForm.teamA.value,
        TeamB:masaiForm.teamB.value,
        Date:masaiForm.date.value,
        Vanue:masaiForm.venue.value,

    };
    schecdule.push(sobj)
    // console.log(schecdule)

    localStorage.setItem("schedule",JSON.stringify(schecdule))

}















