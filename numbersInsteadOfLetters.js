function alphabetPosition(text) {
    return text.toLowerCase().split("").map(l=>{
      if (l.charCodeAt(0)>96&&l.charCodeAt(0)<=122){
        return (l.charCodeAt(0)-96).toString()+" "
      } 
    }).join("").trim()
  }


  function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
  }


  function alphabetPosition(text) {
    return text.toUpperCase().match(/[a-z]/gi)?
    text.toUpperCase().match(/[a-z]/gi)
    .map(c=>c.charCodeAt()-64)
    .join(" ") : ""
  }