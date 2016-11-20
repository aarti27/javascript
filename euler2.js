//Euler-2
var limit = prompt("Enter the limit: ");
var f=1,s=2,t=2,sum=0;
while(t<=limit)
{
  if (t%2===0)
    sum+=t;
  t = f+s;
  f=s;
  s=t;

}
console.log(sum);