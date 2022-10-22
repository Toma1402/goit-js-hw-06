//Task with the numbers of categories
const arrOfItems = document.querySelectorAll(".item");
const amount = arrOfItems.length;

console.log("Number of categories:", amount);

//Searching for the title text and the number of list items

const arrOfTitles = document.querySelectorAll("h2");
for (let i = 0; i < arrOfTitles.length; i += 1) {
  console.log("Category:", arrOfTitles[i].textContent);
  console.log("Elements:", arrOfItems[i].lastElementChild.children.length);
}
