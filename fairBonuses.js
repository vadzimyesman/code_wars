bonus = function(arr, s) {
    // Your code
      let smallest = Math.min(...arr)
    let kef = s/arr.reduce((acc,curr)=>
      acc+(smallest/curr)
    ,0)
    return arr.map(num=>Math.round(smallest/num*kef))
  
  }

  bonus = function(arr, s) {
    let total = arr.reduce((a,c) => a + 1/c, 0);
    return arr.map(e => Math.round(s/e/total))
  }
  
  console.log(bonus([12,15,18],851))