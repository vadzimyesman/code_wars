function towerBuilder(nFloors) {
    // build here
    let answer = []
    let i = 1
    while (i<=nFloors){
      answer.push(" ".repeat(nFloors-i)+"*".repeat(i*2-1)+" ".repeat(nFloors-i))
      i++
    }
    return answer
  }
  

  function towerBuilder(n) {
    return Array.from({length: n}, function(v, k) {
      const spaces = ' '.repeat(n - k - 1);
      return spaces + '*'.repeat(k + k + 1) + spaces;
    });
  }