const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const addIngredients = (array, selector) => {
      array.map(item => {
          const list = document.createElement('li');
          list.textContent = item;
          return list;
      });

      return document.querySelector(selector).append(addIngredients);
  }

  addIngredients(ingredients, '#ingredients');