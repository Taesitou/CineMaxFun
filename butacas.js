
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
    document.getElementById(clicked_id).src = "imgs/butaca_seleccionada.svg";
}