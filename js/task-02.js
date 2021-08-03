const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

//   const addingredients = (array, selector) => {
//       array.map(item => {
//           const list = document.createElement('li');
//           list.textContent = item;
//           return list;
//       });

const addIngredients =
ingredients.map(ing => {
        const list = document.createElement('li');
        list.textContent = ing;
        return list;
    });

      return document.querySelector(list).append(addIngredients);
  

  addIngredients(ingredients, '#ingredients');