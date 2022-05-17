function expandedForm(num) {
    // Your code here
    return num.toString().split("").map((item,index)=>item*Math.pow(10,num.toString().length-index-1)).filter(s=>s!==0).join(" + ")
  }

  const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");