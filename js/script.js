var popup = document.querySelector(".feedback-show");
var link = document.querySelector(".map_form_btn");
var close = document.querySelector(".feedback-close");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
popup.classList.add("feedback-active");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();

popup.classList.remove("feedback-active");

});