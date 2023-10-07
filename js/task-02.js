const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector("#ingredients");
const listItem = ingredients.map((ingredients) => {
const item = document.createElement("li");
item.textContent = ingredients;
item.classList.add("item")
return item;
})

listOfIngredients.append(...listItem)

console.log(listOfIngredients)

