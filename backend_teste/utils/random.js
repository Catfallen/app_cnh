function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}


function choice(lista){
  const max = lista.length;
  const index = getRandomIntInclusive(0,max-1);
  return lista[index]
}


module.exports = choice