function duplicateCount(text){
    //...
  let count = {}
  text.toUpperCase().split("").forEach(element=>count[element]=(count[element]||0)+1)
    console.log(count)
    console.log(text.toLowerCase().split('').sort().join(''))
    let i=0
    for (let key in count){
      if (count[key]>1){
        i++
      }
    }
    return i
  }
  
  
  console.log(duplicateCount("Aqb123ebl1efw453hba"))
  
  // function duplicateCount(text){
  //   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  // }