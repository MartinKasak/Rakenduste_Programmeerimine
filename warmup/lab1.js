/**
* Tegelikult ei tohiks niimoodi testida, peaks kasutama Jest teeki
*/

/**
 * Task 1
 */
const simpleArraySum = xs => xs.reduce( (acc,x) =>  acc +x, 0);

/**
 * Task 2
 */
const reverseString = word => word.split("").reverse().join("");

/**
 * Task 3
 *
 * Generates a random item list
 *
 * @param {number} n - Number of items generated
 * @return [{name, cost}] items
 */
const generateRandomItemList = n => {
  const items = [];
  for(let i=0; i<n; i++){
    const item={
      name: "tlu" + getRandomIntInclusive(0,1000),
      cost:getRandomIntInclusive(0,1000),
    };
    items.push(item);
  }
  return items;

}

// utility function, use it
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

/**
 * Task 4
 */
const findMostExpensiveItem = items => {
  return items.sort((a,b) => b.cost - a.cost)[0]

};

/**
 * Task 5
 */
const findCheapestItem = items => {
  return items.sort((a,b) => a.cost - b.cost)[0]

};;

/**
 * Task 6
 * 
 * Returns items that have matching name
 * 
 * Use case:
 * 1. User inserts search input, ex. "Phone"
 * 2. UI displays only items that have matching name, ex. Displays only phones
 * 
 */
const searchItems = (items, re) => {
  return items.filter(item=>item.name.match(re) !==null)

};

const cars = [{"imgSrc":"https://img1.auto24.ee/auto24/160/794/119331794.jpg","name":"Mercedes-Benz S 63 AMG L 4 Matic Facelift 4.0 V8 450 kW"},{"imgSrc":"https://img3.auto24.ee/auto24/160/995/124015995.jpg","name":"Mercedes-Benz S 63 AMG L 4matic Designo/TV/Distronic 4.0 V8 450 kW"},{"imgSrc":"https://img5.auto24.ee/auto24/160/676/115771676.jpg","name":"Mercedes-Benz S 560 AMG LINE 4.0 V8 345 kW"},{"imgSrc":"https://img1.auto24.ee/auto24/160/381/124051381.jpg","name":"Mercedes-Benz S 400 d 4-Matic Long 3.0 R6 250 kW"},{"imgSrc":"https://img11.auto24.ee/auto24/160/289/126724289.jpg","name":"Mercedes-Benz S 63 AMG 4matic LONG 5.5 430 kW"},{"imgSrc":"https://img6.auto24.ee/auto24/160/824/124966824.jpg","name":"Mercedes-Benz S 560 Maybach 4.0 V8 345 kW"},{"imgSrc":"https://img5.auto24.ee/auto24/160/967/126520967.jpg","name":"Mercedes-Benz S 400 d 4 Matic 3.0 R6 250 kW"},{"imgSrc":"https://img1.auto24.ee/auto24/160/562/113271562.jpg","name":"Mercedes-Benz S 560 L 4 Matic AMG Facelift 4.0 V8 345 kW"},{"imgSrc":"https://img5.auto24.ee/auto24/160/712/114338712.jpg","name":"Mercedes-Benz S 500 L 4 Matic 4.7 V8 335 kW"},{"imgSrc":"https://img1.auto24.ee/auto24/160/262/119968262.jpg","name":"Mercedes-Benz S 400 d 4matic Long 3.0 250 kW"},{"imgSrc":"https://img1.auto24.ee/auto24/160/586/126003586.jpg","name":"Mercedes-Benz S 350 L Facelift 3.0 210 kW"},{"imgSrc":"https://img6.auto24.ee/auto24/160/649/121093649.jpg","name":"Mercedes-Benz S 350 AMG pakett 3.0 210 kW"},{"imgSrc":"https://img5.auto24.ee/auto24/160/043/126257043.jpg","name":"Mercedes-Benz E 53 AMG 3.0 320 kW"},{"imgSrc":"https://img3.auto24.ee/auto24/160/615/119530615.jpg","name":"Mercedes-Benz CLS 350 d AMG LINE 4matic 3.0 210 kW"},{"imgSrc":"https://img1.auto24.ee/auto24/160/260/124182260.jpg","name":"Mercedes-Benz CLS 500 CLS 450 3.0 270 kW"},{"imgSrc":"https://img6.auto24.ee/auto24/160/832/123428832.jpg","name":"Mercedes-Benz S 350  210 kW"},{"imgSrc":"https://img1.auto24.ee/auto24/160/574/111070574.jpg","name":"Mercedes-Benz S 350 BT Distronic 3.0 V6 190 kW"},{"imgSrc":"https://img6.auto24.ee/auto24/160/017/99334017.jpg","name":"Mercedes-Benz S 400 L Hybrid 3.5 225 kW"},{"imgSrc":"https://img1.auto24.ee/auto24/160/211/123827211.jpg","name":"Mercedes-Benz S 350 d Long 4Matic AMG Line 3.0 190 kW"},{"imgSrc":"https://img6.auto24.ee/auto24/160/680/123729680.jpg","name":"Mercedes-Benz S 500 4matic Long "},{"imgSrc":"https://img3.auto24.ee/auto24/160/223/119632223.jpg","name":"Mercedes-Benz E 43 AMG 3.0 295 kW"},{"imgSrc":"https://img7.auto24.ee/auto24/160/004/125382004.jpg","name":"Mercedes-Benz S 350 d 4matic AMG LINE Lang 3.0 190 kW"},{"imgSrc":"https://img7.auto24.ee/auto24/160/550/118586550.jpg","name":"Mercedes-Benz S 350 Lang 3.0 190 kW"},{"imgSrc":"https://img1.auto24.ee/auto24/160/901/115720901.jpg","name":"Mercedes-Benz S 350 S63 AMG line LONG 3.0 190 kW"},{"imgSrc":"https://img11.auto24.ee/auto24/160/861/126057861.jpg","name":"Mercedes-Benz C 63 AMG S 4.0 V8 Biturbo 375 kW"},{"imgSrc":"https://img1.auto24.ee/auto24/160/345/121850345.jpg","name":"Mercedes-Benz S 500 4matic AMG line 4.7 335 kW"},{"imgSrc":"https://img5.auto24.ee/auto24/160/903/125470903.jpg","name":"Mercedes-Benz S 500 L 4-Matic 4.7 V8 335 kW"},{"imgSrc":"https://img3.auto24.ee/auto24/160/149/126642149.jpg","name":"Mercedes-Benz E 220 d 4 Matic AMG/Widescreen 2.0 R4 143 kW"},{"imgSrc":"https://img1.auto24.ee/auto24/160/471/126712471.jpg","name":"Mercedes-Benz E 220 d 4 Matic Avantgarde/Distronic 2.0 R4 143 kW"},{"imgSrc":"https://img4.auto24.ee/auto24/160/281/108691281.jpg","name":"Mercedes-Benz E 350 3.0 190 kW"},{"imgSrc":"https://img1.auto24.ee/auto24/160/214/121892214.jpg","name":"Mercedes-Benz E 220 d 4matic AMG 2.0 143 kW"},{"imgSrc":"https://img1.auto24.ee/auto24/160/896/122994896.jpg","name":"Mercedes-Benz S 350 AMG 4-matic 3.0 CDI 190 kW"},{"imgSrc":"https://img5.auto24.ee/auto24/160/120/109196120.jpg","name":"Mercedes-Benz CLS 350 4 Matic AMG Pakett Facelift 3.0 V6 190 kW"},{"imgSrc":"https://img6.auto24.ee/auto24/160/597/119533597.jpg","name":"Mercedes-Benz C 200 AMG LINE 4Matic  135 kW"},{"imgSrc":"https://img3.auto24.ee/auto24/160/744/120769744.jpg","name":"Mercedes-Benz S 400 Hybrid Amg63 Style 3.5 225 kW"},{"imgSrc":"https://img5.auto24.ee/auto24/160/569/126686569.jpg","name":"Mercedes-Benz E 220 AMG 4Matic Wide  143 kW"},{"imgSrc":"https://img11.auto24.ee/auto24/160/449/126308449.jpg","name":"Mercedes-Benz S 400 Hybrid LONG AMG 63 Styling 3.5 V6 225 kW"},{"imgSrc":"https://img3.auto24.ee/auto24/160/051/123952051.jpg","name":"Mercedes-Benz E 220 AMG 2.0 143 kW"},{"imgSrc":"https://img4.auto24.ee/auto24/160/684/126000684.jpg","name":"Mercedes-Benz S 500 AMG Long 5.0 335 kW"},{"imgSrc":"https://img5.auto24.ee/auto24/160/067/126721067.jpg","name":"Mercedes-Benz E 220 d AMG Widescreen 2.0 143 kW"},{"imgSrc":"https://img6.auto24.ee/auto24/160/977/114154977.jpg","name":"Mercedes-Benz S 350 BT 4 Matic 3.0 V6 190 kW"},{"imgSrc":"https://img7.auto24.ee/auto24/160/312/123233312.jpg","name":"Mercedes-Benz E 350 CDI 4Matic 3.0 190 kW"},{"imgSrc":"https://img3.auto24.ee/auto24/160/091/116352091.jpg","name":"Mercedes-Benz S 350 BlueTEC 3.0 190 kW"},{"imgSrc":"https://img3.auto24.ee/auto24/160/003/123161003.jpg#360","name":"Mercedes-Benz CLS 250 d 4 Matic AMG 2.1 R4 150 kW"},{"imgSrc":"https://img6.auto24.ee/auto24/160/147/124027147.jpg","name":"Mercedes-Benz S 500 4matic AMG 4.7 335 kW"},{"imgSrc":"https://img3.auto24.ee/auto24/160/199/121490199.jpg#360","name":"Mercedes-Benz C 200 4 Matic AMG Widescr Facelift 1.5 R4 135 kW"},{"imgSrc":"https://img6.auto24.ee/auto24/160/415/124588415.jpg","name":"Mercedes-Benz S 350 D Bluetec 3.0 190 kW"},{"imgSrc":"https://img4.auto24.ee/auto24/160/145/123007145.jpg","name":"Mercedes-Benz S 350 4matic Bluetec 3.5 190 kW"},{"imgSrc":"https://img6.auto24.ee/auto24/160/185/116450185.jpg","name":"Mercedes-Benz S 350 3.0 190 kW"},{"imgSrc":"https://img3.auto24.ee/auto24/160/149/124058149.jpg","name":"Mercedes-Benz S 350 AMG Line 3.0 190 kW"}]











// Testing functions below, ignore these

const test = (a, b) => console.log(a === b ? "PASS" : `FAIL actual:${a} expected:${b}`);
const findHighest = (items) => {
  return items.reduce( (acc, item) => {
    if(acc < item.cost) acc = item.cost;
    return acc;
  },0);
};

const findLowest = (items) => {
  return items.reduce( (acc, item) => {
    if(!acc || acc > item.cost) acc = item.cost;
    return acc;
  },null);
};

const isEachItemDifferent = items => {
  let result = false;
  items.forEach( (item, index) => {
    if(index === 0 ) return result = true;
    result = isDifferent(item, items[index-1]);
  });
  return result;
};

const isDifferent = (item1, item2) => {
  return item1.name !== item2.name &&
    item1.cost !== item2.cost
};

console.log("\nTest simpleArraySum");
test(simpleArraySum([1,2,3]), 6)
test(simpleArraySum([]), 0)
test(simpleArraySum([2,-3]), -1)

console.log("\nTest reverseString");
test(reverseString("Tallinn University"), "ytisrevinU nnillaT")
test(reverseString(""), "")

console.log("\nTest generateRandomItemList");
const t1 = isEachItemDifferent(generateRandomItemList(20));
test(t1, true);
const t2 = isEachItemDifferent(generateRandomItemList(30));
test(t2, true);

console.log("\nTest findMostExpensiveItem");
const items1 = generateRandomItemList(30)
try{
  test(findMostExpensiveItem(items1).cost, findHighest(items1))
}
catch(e){
  console.log("FAIL");
}

console.log("\nTest findMostExpensiveItem");
const items2 = generateRandomItemList(30)
try{
  test(findCheapestItem(items2).cost, findLowest(items2))
}
catch(e){
  console.log("FAIL");
}

console.log("\nTest searchItems")
console.log(searchItems(cars, /Hybrid/).map(car => car.name))
test(searchItems(cars, / Hybrid /).length, 3);
console.log(searchItems(cars, / AMG /).map(car => car.name))
test(searchItems(cars, / AMG /).length, 27);
