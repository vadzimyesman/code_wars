function dirReduc(arr){
    // ...
    let answer = []
    
    let rules = {
      SOUTH: "NORTH",
      NORTH: "SOUTH",
      EAST: "WEST",
      WEST: "EAST"
    }
    
    arr.forEach((word,index,array)=>{
      if (answer[answer.length-1]===rules[word]){
        answer.pop()
      } else{
        answer.push(word)
      }
    })
    return answer
  
  }


  function dirReduc(plan) {
    var opposite = {
      'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return plan.reduce(function(dirs, dir){
        if (dirs[dirs.length - 1] === opposite[dir])
          dirs.pop();
        else
          dirs.push(dir);
        return dirs;
      }, []);
  }