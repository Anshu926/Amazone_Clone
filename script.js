function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  let icon = document.querySelector(".moon");
let body = document.querySelector("body");

function fun(){
    body.classList.toggle("dark");
}
