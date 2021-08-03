const newCategories = document.querySelector('#categories');
console.log(newCategories);
const newItems = newCategories.querySelectorAll('.item');


const title = [];
newItems.forEach(elem => {
  console.log('Категория : ', elem.getElementsByTagName('h2')[0].textContent);
  console.log(
    'Количество эелментов : ',
    elem.getElementsByTagName('li').length
  );
  console.log('');
});
console.log(title.flatMap(elem => Object.values(elem)));