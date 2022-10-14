
//document.querySelectorAll(".sillon").forEach(el => {
//    el.addEventListener("click", e => {
//      const id = e.target.getAttribute("id");
//      console.log("Se ha clickeado el id "+id);
//      document.getElementById(id).src = "imgs/butaca_seleccionada.svg";
//   });
//  });
//let butacas = document.querySelectorAll(".sillon");
//function Cambiar(){

//for (i = 0; i < butacas.length; i++){
 //   let butaca = butacas[i];
  //  butaca.addEventListener("click", e => {
   //     const id = e.target.getAttribute("id");
    //    id.src = "imgs/butaca_seleccionada.svg"} )
//}
//}

function Cambiar(clicked_id)
{
    var color = document.getElementById(clicked_id).src;
    console.log(color);
    if(document.getElementById(clicked_id).src === "file:///C:/Users/minec/Documents/GitHub/CineMaxFun/imgs/event_seat.svg"){
        document.getElementById(clicked_id).src = "imgs/butaca_seleccionada.svg";
    }  
    else {
        document.getElementById(clicked_id).src = "imgs/event_seat.svg";
    }
}

    

