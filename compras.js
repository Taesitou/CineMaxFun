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
  