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

      document.querySelector(selector).append(array);
  }

  addIngredients(ingredients, '#ingredients');