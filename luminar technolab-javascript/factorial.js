var a=2
if(a<0){
    console.log("invalid")
}
else if (a==0){
    console.log("fact of zero is 1")
}
else{
    let fact=1
    for(let i=1;i<=a;i++){
        fact=fact*i
    }
    console.log(fact)
}