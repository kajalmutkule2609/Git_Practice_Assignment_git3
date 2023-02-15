let num=13;
let temp=0;
for(let i=2;i<num;i++){
if(num%i==0){
temp++;
}
}
if(temp==0){
console.log("Prime");
}
else{
console.log("Not Prime");
}
