class Plugboard{
    constructor(wires){
      this.wires=wires
    }
  
    //method process
    process(wire){
      let table = {}
      this.wires.split("").filter(symbol=>/[A-Z]/.test(symbol)).forEach((letter,index,array)=> {
      if (Object.keys(table).length<20&&!table[letter]){
          if (index%2) { table[letter]=array[index-1]
          } else if (array[index+1]&&!table[array[index+1]]){
            table[letter]=array[index+1]
          }
      }
    })
      console.log(table)
      return wire.split("").map(symbol=>table[symbol]||symbol).join("")
    }
  }
  
  // class Plugboard{
  //   //your code here
  //   constructor(wires){
  //     this.wires=wires
  //   }
  //   this.table = {}
  //   this.wires.split("").filter(symbol=>/[A-Z]/.test(symbol)).forEach((letter,index,array)=> {
  //     if (index%2) { table[letter]=array[index-1]
  //       } else {
  //         table[letter]=array[index+1]||letter
  //       }
  //   })
    
  //   process(wire){
  //     //your code here
  //     return wire.split("").map(symbol=>table[symbol]||symbol).join("")
  //   }
  // }
  
  // plugboard = new Plugboard("AB")
  plugboard = new Plugboard("JXAMWEOFQKPCLDGY")
  console.log(plugboard.process("ROTOR SLEEP ENIGMA IS AT AT"))