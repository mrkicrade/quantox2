window.onscroll = function() {myFunction()};

var navigation = document.getElementById("navigation");

function myFunction() {
  if (window.pageYOffset >= 100) {
    navigation.classList.add("sticky")
  } else {
    navigation.classList.remove("sticky");
  }
}