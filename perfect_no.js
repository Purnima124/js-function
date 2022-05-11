function number(){
    const r=require("readline-sync")
    var n=r.questionInt("enter a number :")
    sum=0
    i=1
    while (i<n){
        if (n%i==0){
            sum=sum+i
        }
        i=i+1
    }
    if (sum==n){
        console.log("perfect number")
    }else{
        console.log("not perfect number")
    }
}
number()

