function sumDigPow(a, b) {
    // Your code here
    let array=[]
    for (i=a;i<=b;i++){
       if(i.toString().split("").map(element=> +element).reduce((acc,curr,index)=>acc+=Math.pow(curr,index+1))===i){
         array.push(i)
       }
  }
    return array
  }

//   function sumDigPow(a, b) {
//     var ans = [];
//     while(a <= b){
//       if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
//         ans.push(a);
//       a++;
//     }
//     return ans;
//   }