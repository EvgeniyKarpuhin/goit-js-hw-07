const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  
//   const addList = document.querySelector('#gallery');

//   const image = images[0];
//   const addImages = images.map(image => {
//     const newList = document.createElement('li');
//     newList.classList = 'gallery__img';

// const imgNew = document.createElement('img');
// imgNew.src = image.url;
// imgNew.alt = image.alt;
// imgNew.width = 320;

// newList.appendChild(imgNew);

// addList.append(newList);
//   });

function createList(images) {
    const addList = document.querySelector('#gallery');
    // addList.classList.add('gallery__img');
    
    const imgNew = images.reduce(
      (image, item) => 
      image + `<li>
      <img class = "gallery__img" 
      src = "${item.url}"
      alt = "${item.alt}" 
      width = 320 >
      </li>`,
      ""
    );
    
    addList.insertAdjacentHTML('afterbegin', imgNew);  
  };
  createList(images);