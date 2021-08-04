const newCategories = document.querySelector('#categories');

const newItems = newCategories.querySelectorAll('.item');

const titles = [];
newItems.forEach(elem => {
  console.log('Категория : ', elem.getElementsByTagName('h2')[0].textContent);
  console.log(
    'Количество эелментов : ',
    elem.getElementsByTagName('li').length
  );
  console.log('');
});
