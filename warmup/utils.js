const categories = {
    PHONE: "phone",
    COMPUTER: "computer"
  };
  
  const generateRandomItemList = n => {
    const arr = [];
    for(let i = 1; i<= n; i++){
      const item = {
        name: "item" + i,
        cost: getRandomIntInclusive(0, 1000),
        category: Object.values(categories)[getRandomIntInclusive(0,1)]
      };
      arr.push(item);
    }
    return arr;
  };
  
  // utility function, use it
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
  
  const test = (a, b) => console.log(a === b ? `PASS` : `FAIL actual:${a} // expected:${b}`);
  
  module.exports = {
    test,
    categories
  };