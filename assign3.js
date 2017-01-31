function addTwo(a) {
  newa = new Array();

  a.forEach((item) => {
    newa.push(item + 2);
  })

  return newa;
}

a = [1, 2, 3]
newa = addTwo(a);
console.log(a);
console.log(newa);
