function speed(){
    const r=require("readline-sync")
    var speed=r.questionInt("Enter gari ki speed :")
    if (speed<=70){
        console.log("ok")
    }else if(speed>=130){
        speed=speed-70
        console.log(speedMath.floor5)
    }
    else{
        console.log("lainsence kancil")
    }
}
speed()
