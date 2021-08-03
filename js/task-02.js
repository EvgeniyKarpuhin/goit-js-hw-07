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
          const list = document.createElement('li');
          list.textContent = item;
          return list;
      });

      return document.querySelector(selector).append(...array);
  }

  addingredients(ingredients, '#ingredients');