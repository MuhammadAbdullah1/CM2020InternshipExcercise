import "./styles.css";
import menu from "./menu";

//I have included old_index.js for thought process purposes only

// This sorts the menu items in order even before running anything as
//the createListFunction organises the food type using a simple comparator sort
const sortedMenu = menu.items.sort((a, b) =>
  a.menuOrder > b.menuOrder ? 1 : -1
);

//This traverses through the array and organises food type
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
}

//This function is dynamic and you can continusly add more food types
//and the function should work correctly
function createList(menuitem, menuType) {
  var foodlist = document.createElement("li"); // Create a <li> node
  var eachFood = document.createElement("ul"); // Create a <ul> node

  var nameNode = document.createTextNode(sortedMenu[menuitem].name); // Create a name node
  nameNode.className = "foodName";

  var descNode = document.createTextNode(sortedMenu[menuIndex].description); // Create a description node
  var desc = document.createElement("li");
  desc.appendChild(descNode);

  var priceNode = document.createTextNode(
    "Price: " + sortedMenu[menuitem].price.toFixed(2)
  ); // Create a price node
  var price = document.createElement("li");
  price.appendChild(priceNode);

  foodlist.appendChild(nameNode);
  foodlist.appendChild(eachFood);
  eachFood.appendChild(desc);
  eachFood.appendChild(price);

  //Checks if the food is spicy as well as adds the checkbox
  if (sortedMenu[menuitem].spicy === true) {
    var spicyFood = document.createElement("li");
    var spicyInput = document.createElement("input");

    spicyFood.className = "disclaimer spicy";
    spicyInput.type = "checkbox";
    spicyInput.checked = "true";

    spicyFood.appendChild(spicyInput);
    eachFood.appendChild(spicyFood);
  }

  document.getElementById(menuType).appendChild(foodlist);
}
