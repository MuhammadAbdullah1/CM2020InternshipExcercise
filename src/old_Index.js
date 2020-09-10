//
//
//
// PLEASE REFER TO INDEX.JS. THIS IS FOR ARCHIVE AND THOUGHT PROCESS DOCUMENTATION ONLY
//
//
//

import "./styles.css";
import menu from "./menu";

//sort the menu items in order even before running anything as the createListFunction
//organises the food type
const sortedMenu = menu.items.sort((a, b) =>
  a.menuOrder > b.menuOrder ? 1 : -1
);

//console.log(sortedMenu);

for (var menuIndex in sortedMenu) {
  switch (sortedMenu[menuIndex].type) {
    case "starters":
      createList(menuIndex, "starters");
      break;
    case "pizza":
      createList(menuIndex, "pizza");
      break;
    case "pasta":
      createList(menuIndex, "pasta");
      break;
    default:
      break;
  }

  //if statement also does work but the switch statement is more effecient
  // if (sortedMenu[menuIndex].type === "starters") {
  //   createList(menuIndex, "starters");
  // } else if (sortedMenu[menuIndex].type === "pizza") {
  //   createList(menuIndex, "pizza");
  // } else if (sortedMenu[menuIndex].type === "pasta") {
  //   createList(menuIndex, "pasta");
  // }
}

//this function is dynamic and you can continusly add more food types and the function
//should work correctly
function createList(menuitem, menuType) {
  //var ovList = document.createElement("ul"); // Create a <ul> node

  var foodlist = document.createElement("li"); // Create a <li> node
  var eachFood = document.createElement("ul"); // Create a <ul> node
  //var foodDesc = document.createElement("li"); // Create a <li> node

  var nameNode = document.createTextNode(sortedMenu[menuitem].name); // Create a name node
  nameNode.className = "food_name";

  var descNode = document.createTextNode(sortedMenu[menuIndex].description); // Create a text node
  var desc = document.createElement("li");
  desc.appendChild(descNode);

  // var typeNode = document.createTextNode("Type: " + sortedMenu[menuitem].type); // Create a desctiption node
  // var type = document.createElement("li");
  // type.appendChild(typeNode);

  var priceNode = document.createTextNode(
    "Price: " + sortedMenu[menuitem].price.toFixed(2)
  ); // Create a price node
  var price = document.createElement("li");
  price.appendChild(priceNode);

  // var mONode = document.createTextNode(
  //   "Menu Order: " + sortedMenu[menuitem].menuOrder
  // ); // Create a menuOrder node
  // var mOrder = document.createElement("li");
  // mOrder.appendChild(mONode);

  //ovList.appendChild(foodlist); // Append the text to <li>
  foodlist.appendChild(nameNode);
  foodlist.appendChild(eachFood); // Append the text to <li>
  eachFood.appendChild(desc);
  // eachFood.appendChild(type);
  eachFood.appendChild(price);
  // eachFood.appendChild(mOrder);

  if (sortedMenu[menuitem].spicy === true) {
    //var spiceNode = document.createTextNode("Spicy"); // Create a spicy node
    var spicyFood = document.createElement("li");
    var spicyInput = document.createElement("input");

    spicyFood.className = "disclaimer spicy";
    spicyInput.type = "checkbox";
    spicyInput.checked = "true";

    //spicyFood.appendChild(spiceNode);

    spicyFood.appendChild(spicyInput);
    eachFood.appendChild(spicyFood);
  }

  //eachFood.appendChild(foodDesc);

  document.getElementById(menuType).appendChild(foodlist);
}
