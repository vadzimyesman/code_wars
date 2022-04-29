function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }  

function findUniq(arr) {
    // do magic
    return arr.indexOf(Math.min(...arr))===arr.lastIndexOf(Math.min(...arr))? Math.min(...arr): Math.max(...arr)
  }
// function findUniq(arr) {
//   // do magic
//   let answer
//   if (arr[0]===arr[1]){
//   arr.forEach(num=>{
//     if (num!==arr[0]){
//       answer=num
//     }
//   })
//   } else if (arr[0]!==arr[1]){
//     if (arr[2]==arr[0]){
//       answer=arr[1]
//     } else answer=arr[0]
//   }
//   return answer
// }

// console.log(findUniq([1,2,1]))

