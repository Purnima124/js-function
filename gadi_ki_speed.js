function license_checker(speed){
const r=require("readline-sync")
var speed=r.questionInt("Enter gari ki speed :")
    if(speed <=70){
        console.log("ok");
    }
    if(speed > 70){
        points=0
    for(var i=70;i<speed;i+=5){
        points+=1
    }
    if(points>12){
        console.log("License suspended");
    }
    else{
        console.log(points);
    }
    }
    }
license_checker()
