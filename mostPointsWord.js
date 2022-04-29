function high(x){
    const alphabet = [
      'a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r',
      's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
    ]
     let answer = "ra"
     let max1 = 0
    
      x.split(" ").forEach(word=>{
        let count = (word.split("").reduce((acc,curr)=>acc+(alphabet.indexOf(curr))+1,0))
        if (count>max1){
          max1=count
          answer = word
        }
      })
    return answer
    }
    
    function high(s){
      let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
      return s.split(' ')[as.indexOf(Math.max(...as))];
    }
    
    high("vadzim is so cool")