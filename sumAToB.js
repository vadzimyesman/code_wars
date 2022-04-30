function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}
console.log(GetSum(-1,2))


function GetSum( a,b,c = 0 ) { if (a == b) return a + c; else if (a < b) return GetSum(a+1, b,a+c);
else return GetSum(a-1,b,a+c); }

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}