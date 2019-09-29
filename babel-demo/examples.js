const utils = require("./utils.js");

const mockItems = [
  { name: 'item1', cost: 728, category: 'computer' },
  { name: 'item2', cost: 413, category: 'computer' },
  { name: 'item3', cost: 392, category: 'phone' },
  { name: 'item4', cost: 519, category: 'phone' },
  { name: 'item5', cost: 96, category: 'phone' },
  { name: 'item6', cost: 470, category: 'computer' },
  { name: 'item7', cost: 506, category: 'computer' },
  { name: 'item8', cost: 352, category: 'phone' },
  { name: 'item9', cost: 948, category: 'computer' },
  { name: 'item10', cost: 62, category: 'phone' },
  { name: 'item11', cost: 55, category: 'computer' },
  { name: 'item12', cost: 825, category: 'computer' },
  { name: 'item13', cost: 155, category: 'computer' },
  { name: 'item14', cost: 388, category: 'phone' },
  { name: 'item15', cost: 728, category: 'phone' },
  { name: 'item16', cost: 533, category: 'phone' },
  { name: 'item17', cost: 970, category: 'computer' },
  { name: 'item18', cost: 826, category: 'computer' },
  { name: 'item19', cost: 266, category: 'phone' },
  { name: 'item20', cost: 362, category: 'computer' }
];

/**
 * Task 1
 */
const sumOfCost = items => {
  return items.reduce( (acc, item) => acc + item.cost, 0);
};

utils.test(sumOfCost(mockItems), 9594);

/**
 * Task 2
 */
const getPhones = items => {
  return items.filter(item => item.category =="phone");
};

utils.test(getPhones(mockItems).slice(-1)[0].name, "item19");
utils.test(getPhones(mockItems).length, 9);

/**
 * Task 3
 *
 * 1. implement "addToCart" method
 * 2. implement "getCart" method
 *
 * Look tests below for more information
 */
class User {
  constructor(){
    this.items=[];

  }
  addToCart(item){
    this.items.push(item);
  }
  getCart(items){
    return this.items;
  }
}

const user1 = new User();

try{
  user1.addToCart(mockItems[1]);
  user1.addToCart(mockItems[4]);
  const cart = user1.getCart();

  utils.test(cart.length, 2);
  utils.test(sumOfCost(cart), 509);
  utils.test(getPhones(cart)[0].name, "item5")
}
catch(e){
  console.log("FAIL")
}