function comp(array1, array2){
    //your code here
    if(array1===null||array2===null){
      return false
    }
    
   let a = array1
   let b = array2
    
   a.forEach((curr,index,array)=>{
    if(b.includes(curr*curr)){
      a=a.slice(1)
      b.splice(b.indexOf(curr*curr),1)
    }
  })
    return a.length===0&&b.length===0
  }


  function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
  }


  function comp(a, b) {
    return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
  }