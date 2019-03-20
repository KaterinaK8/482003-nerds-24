var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [59.9385879964992,30.322882838623055],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    });

}

  var link = document.querySelector(".write-us");

  var popup = document.querySelector(".map-popup");
  var close = popup.querySelector(".map-popup-close");

  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=feedback-login]");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("map-popup-show");
    login.focus();
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("map-popup-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
    evt.preventDefault();
    console.log("Нужно ввести имя и пароль");
  }else {
  localStorage.setItem("login", login.value);
  }
  });
