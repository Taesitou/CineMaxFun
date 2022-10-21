function cardnumber(inputtxt)
{
  var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  if(inputtxt.value.match(cardno))
        {
      return true;
        }
      else
        {
        alert("No es un numero valido de tarjeta de credito Visa!");
        return false;
        }
}

function numeroseguro(inputtxt)
   {
      var numbers = /^[0-9]+$/;
      if(inputtxt.value.match(numbers))
      {
      
      return true;
      }
      else
      {
      alert('Solo numeros Validos porfavor');
      return false;
      }
   } 



function allLetter(inputtxt)
  {
   var letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("No es un Nombre de titular Valido");
     return false;
     }
  }

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(evento) {
    evento.preventDefault();
    if (allLetter(document.form1.text_nombre) && numeroseguro(document.form1.text_seguro) && cardnumber(document.form1.text_numero) === true){
      this.submit();
      return;
    }
    
  }
  
/*function Validar(Evento){
  if (allLetter(inputtxt) || numeroseguro(inputtxt) || cardnumber(inputtxt) === false){
    Evento.preventDefault();
    return;
    
  }
  else{
    Evento.submit();
    return;
  }
}*/