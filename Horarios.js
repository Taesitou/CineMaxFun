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
  
  function color(clicked_id)
  {
      var color = document.getElementById(clicked_id).className;
      console.log(color);
      if(document.getElementById(clicked_id).className === "sel"){
          document.getElementById(clicked_id).className = "nosel";
      }  
      else {
          document.getElementById(clicked_id).className = "sel";
      }
  }