/* When the user scrolls down, hide the header. When the user scrolls up, show the header */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    document.getElementById("navbarToggler").classList.remove("collapsing");
    document.getElementById("navbarToggler").classList.add("collapse");
  } else {
    document.getElementById("header").style.top = "-88px";
    document.getElementById("navbarToggler").classList.remove("collapse");
    document.getElementById("navbarToggler").classList.remove("show");
    document.getElementById("navbarToggler").classList.add("collapsing");
  }
  prevScrollpos = currentScrollPos;
} 