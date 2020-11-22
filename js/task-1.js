// count the number of categories
const categories = document.querySelectorAll('ul > li.item');
const categoriesNumber = categories.length;
console.log(`В списке ${categoriesNumber} категории`);


// category name and number of items
const infoCategories = [...categories].map(category => `Категория ${category.children[0].textContent}\nКоличество элементов: ${category.children[1].children.length}\n`);
console.log(infoCategories.join('\n'));
