// Когда пользователь прокручивает вниз 50px от верхней части документа, измените размер шрифта заголовка
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("LogoPipe").style.width = "30px";
  } else {
    document.getElementById("LogoPipe").style.height = "90px";
  }
}