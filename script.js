var inputedDate;
function findDate(){
var selectedMonth = document.getElementById('month').value;
var selectedyear = document.getElementById('year').value;
var selecteddate = document.getElementById('date').value;

 inputedDate = new Date(selectedyear+"-"+selectedMonth+"-"+selecteddate)
console.log(inputedDate)
}

var dt = new Date();
dt.setDate(1);

var day = dt.getDay();
var endDate = new Date(
    dt.getFullYear(),
    dt.getMonth()+1,
    0
).getDate()
var months = ['January', 'February', 'Mrach', 'April', 'May', 'JUne', 
'July', 'August', 'September', 'Octomber', 'November','December']
var today = new Date().getDate();
var cells = "";

for( x=day; x>0; x--){
    cells += "<div>" + " "+"</div>";
}

for(i=1; i<=endDate; i++){
    if(i==inputedDate){
        cells +="<div class='today'>" + i +"</div>";
    }else{
        cells += "<div>" + i +"</div>";
    }
}
for( x=day; x>-1; x--){
    cells += "<div>" + " "+"</div>";
}


document.getElementsByClassName("days")[0].innerHTML = cells


