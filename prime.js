let num=13;
let temp=0;
for(let i=2;i<num;i++){
if(num%i==0)
{
temp++;
}
}
if(temp==0)
{
console.log("This is a Prime number");
}
else
{
console.log("This is not a Prime number");
}
