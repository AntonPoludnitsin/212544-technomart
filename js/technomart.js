// **************** определение объектов *********************

// write_us popup
var stray_button = document.querySelector(".ourcontacts-link");
var write_us_popup = document.querySelector(".write-us");
var write_us_label = document.querySelectorAll(".write-us-label");
var write_us_close = document.querySelector(".write-us-close");

var form = write_us_popup.querySelector("form");
var user_name = write_us_popup.querySelector("[type=text]");
var user_email = write_us_popup.querySelector("[type=email]");

// map popup
var mapLink = document.querySelector(".ourcontacts-map");
var mapPopup = document.querySelector(".map-wrapper");
var mapClose = mapPopup.querySelector(".map-close");




// ********************** действия ****************************

// write_us popup
stray_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  write_us_popup.classList.add("show");
});
write_us_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  write_us_popup.classList.remove("show");
});

// write_us error
form.addEventListener("submit", function (evt) {
  if (user_name.value.length == 0) {
    evt.preventDefault();
    write_us_label[0].classList.add("value-error");
  }
  if (user_email.value.length == 0) {
    evt.preventDefault();
    write_us_label[1].classList.add("value-error");
  }
});

// map popup
mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("show");
});
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("show");
});





