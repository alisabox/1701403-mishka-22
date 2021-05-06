// Mobile menu
var navMain = document.querySelector('.page-navigation');
var navToggle = document.querySelector('.page-navigation__toggle');

navMain.classList.remove('page-navigation--nojs');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('page-navigation--active');
});

// Modal window
var modal = document.querySelector('.modal');
var buttonAdd = document.querySelectorAll('.catalog-item__add');
var buttonOrder = document.querySelector('.button-order');

if (buttonAdd) {
  buttonAdd.forEach (buttonAdd => {
    buttonAdd.addEventListener('click', function(evt) {
      evt.preventDefault();
      modal.classList.add('modal--show');
    })
  })
};

if (buttonOrder) {
    buttonOrder.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.add('modal--show');
  })
};

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal--show')) {
      evt.preventDefault();
      modal.classList.remove('modal--show');
    }
  }
});

window.onclick = function(evt) {
  if (evt.target == modal) {
    modal.classList.remove('modal--show');
  }
};

// Map
var map = document.getElementById('map');
if (map) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [59.938823968761554, 30.323047398537284],
      zoom: 17
    }, {
      searchControlProvider: 'yandex#search'
    }),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Магазин "Мишка"'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.svg',
      iconImageSize: [67, 100],
      iconImageOffset: [-17, -100]
    });
    myMap.geoObjects
      .add(myPlacemark);
    })
};
