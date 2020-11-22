const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const listIngredientsRef = document.querySelector('#ingredients');
ingredients.forEach(ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;
  listIngredientsRef.append(ingredientRef);
})

