function validatePIN (pin) {
    //return true or false
    console.log(pin.split("").filter(a=>!isNaN(a)))
    console.log(typeof(Number(" ")))
    return (pin.length===4&&pin.split("").filter(a=>Number.isInteger(parseInt(a))).length===4)||(pin.split("").filter(a=>Number.isInteger(parseInt(a))).length===6&&pin.length===6)
  }

  console.log(validatePIN('123 '))



  function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }