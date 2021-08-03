const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const addingredients = (array, selector) => {
      array.map(item => {
          item = document.createElement('li');
          item.textContent = item;
          return item;
      });

      return document.querySelector(selector).append(...array);
  }

  addingredients(ingredients, '#ingredients');