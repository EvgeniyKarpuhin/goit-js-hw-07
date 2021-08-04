const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const addIngredients = (array, selector) => {
      const test = array.map(item => {
          const list = document.createElement('li');
          list.textContent = item;
          return test;
      });

      document.querySelector(selector).append(test);
  }

  addIngredients(ingredients, '#ingredients');