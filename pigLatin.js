function pigIt(str){
    //Code here
    let first=""
    return str.split(" ").map(item=>{
        return (/[a-z]/gi).test(item.split("")[0])? item.replace(item[0],"")+item.split("")[0]+"ay" : item
    }).join(" ")
    
  }
  
  console.log(pigIt("Hello world !"))
  console.log("a".charCodeAt())
  
  // let x="Vadzim"
  // console.log(x.split("")[0])

  function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }


  function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
      return w.slice(1) + w[0] + 'ay';
    });
  }