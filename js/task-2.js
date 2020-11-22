const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredientsRef = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;
  return ingredientRef;
});

listIngredientsRef.append(...elements);