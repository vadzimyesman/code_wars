function solution(string) {
    return string.split("").map(item=> {
      if (item.toUpperCase()===item){
          return " "+item
      } else return item
    }).join("")

}

function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }