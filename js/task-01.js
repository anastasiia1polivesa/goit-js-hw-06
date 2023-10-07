
const categories = document.querySelectorAll("#categories li.item");
const numberOfCategories = categories.length;
console.log(numberOfCategories);

const el = document.querySelectorAll(".item");
el.forEach((item) => {
    console.log(item.firstElementChild.textContent);
    console.log(item.lastElementChild.children.length)
})
