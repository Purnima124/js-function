function even(){
    const r=require("readline-sync")
    var num=r.questionInt("Enter the question")
    if (num%2==0){
        console.log("even No.")
    }else{
        console.log("odd No.")
    }
}
even()
