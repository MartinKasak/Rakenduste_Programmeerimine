
/* const homepage = require("./homepage.js");
const itempage = require("./itempage.js");
 */

 import homepage from "./homepage.js";
 import itempage from "./itempage.js";

 console.log("i am index file");

window.addEventListener("load", () =>{
  homepage.setup();
  itempage.setup();
});
