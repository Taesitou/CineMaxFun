function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
  

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}

var count =0;

function color(x) {
  var x;
  if (x == 1){
    count = count+1;
  }
  if (count == 1){
    document.getElementById("btn_col1").style.background = "#05a1fc";
    document.getElementById("btn_col1").style.borderRadius = "12px";
    document.getElementById("btn_col1").style.color = "white";
  }
  else if (count == 2){
    document.getElementById("btn_col1").style.background = "white";
    document.getElementById("btn_col1").style.color = "black";
    count =0;
  }
}
var count2 =0;

function color2(x) {
  var x;
  if (x == 1){
    count2 = count2+1;
  }
  if (count2 == 1){
    document.getElementById("btn_col2").style.background = "#05a1fc";
    document.getElementById("btn_col2").style.borderRadius = "12px";
    document.getElementById("btn_col2").style.color = "white";
  }
  else if (count2 == 2){
    document.getElementById("btn_col2").style.background = "white";
    document.getElementById("btn_col2").style.color = "black";
    count2 =0;
  }
}
var count3 =0;

function color3(x) {
  var x;
  if (x == 1){
    count3 = count3+1;
  }
  if (count3 == 1){
    document.getElementById("btn_col3").style.background = "#05a1fc";
    document.getElementById("btn_col3").style.borderRadius = "12px";
    document.getElementById("btn_col3").style.color = "white";
  }
  else if (count3 == 2){
    document.getElementById("btn_col3").style.background = "white";
    document.getElementById("btn_col3").style.color = "black";
    count3 =0;
  }
}
var count4 =0;

function color4(x) {
  var x;
  if (x == 1){
    count4 = count4+1;
  }
  if (count4 == 1){
    document.getElementById("btn_col4").style.background = "#05a1fc";
    document.getElementById("btn_col4").style.borderRadius = "12px";
    document.getElementById("btn_col4").style.color = "white";
  }
  else if (count4 == 2){
    document.getElementById("btn_col4").style.background = "white";
    document.getElementById("btn_col4").style.color = "black";
    count4 =0;
  }
}
var count5 =0;

function color5(x) {
  var x;
  if (x == 1){
    count5 = count5+1;
  }
  if (count5 == 1){
    document.getElementById("btn_col5").style.background = "#05a1fc";
    document.getElementById("btn_col5").style.borderRadius = "12px";
    document.getElementById("btn_col5").style.color = "white";
  }
  else if (count5 == 2){
    document.getElementById("btn_col5").style.background = "white";
    document.getElementById("btn_col5").style.color = "black";
    count5 =0;
  }
}
var count6 =0;

function color6(x) {
  var x;
  if (x == 1){
    count6 = count6+1;
  }
  if (count6 == 1){
    document.getElementById("btn_col6").style.background = "#05a1fc";
    document.getElementById("btn_col6").style.borderRadius = "12px";
    document.getElementById("btn_col6").style.color = "white";
  }
  else if (count6 == 2){
    document.getElementById("btn_col6").style.background = "white";
    document.getElementById("btn_col6").style.color = "black";
    count6 =0;
  }
}
var count7 =0;

function color7(x) {
  var x;
  if (x == 1){
    count7 = count7+1;
  }
  if (count7 == 1){
    document.getElementById("btn_col7").style.background = "#05a1fc";
    document.getElementById("btn_col7").style.borderRadius = "12px";
    document.getElementById("btn_col7").style.color = "white";

  }
  else if (count7 == 2){
    document.getElementById("btn_col7").style.background = "white";
    document.getElementById("btn_col7").style.color = "black";
    count7 =0;
  }
}
