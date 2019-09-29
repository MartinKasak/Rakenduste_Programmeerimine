console.log("utils.js loaded");

// support function
function createItemElement(item){
    const anchor = document.createElement("a");
    anchor.href = `./item.html?title=${item.title}&cost=${item.price}&src=${item.imgSrc}`;
  
    const itemContainer = document.createElement("div");
    itemContainer.className = "item";
  
    const imgElement = document.createElement("img");
    imgElement.src = item.imgSrc;
  
    const priceElement = document.createElement("div");
    priceElement.innerText = item.price;
    priceElement.className = "item__price";
  
    const titleElement = document.createElement("div");
    titleElement.className = "item__title";
    titleElement.textContent = item.title;
  
    anchor.append(itemContainer);
    itemContainer.append(imgElement);
    itemContainer.append(titleElement);
    itemContainer.append(priceElement);
  
    return anchor;
  }