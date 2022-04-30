function rot13(message){
    //your code here
    return message.split("").map(l=>{
      if (l.charCodeAt(0)>=65&&l.charCodeAt(0)<=122){
        if (l.charCodeAt(0)>=78&&l.charCodeAt(0)<=91||l.charCodeAt(0)<=122&&l.charCodeAt(0)>=110){
          return String.fromCharCode(l.charCodeAt(0)-13)
        } else {
          return String.fromCharCode(l.charCodeAt(0)+13)
        }
      } else {
        return l
      }
    }).join("")
  }


  function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
  }


  const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));