//if num is dividible by 3==print fizz
//if num is dividible by 5==print buzz
//if num is divisible by 15 print fizzbuzz

var a=55
if (a%15==0){
    console.log("fizzbuzz")
}
else if(a%5==0){
    console.log("buzz")

}
else if(a%3==0){
    console.log("fizz")
}
else{
    console.log("error")
}