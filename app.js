
function principal(){
  var tc = prompt("Ingrese su tarjeta de credito: ");
  if(tc!="") {
    if(isValidCard(tc)==true) {
      alert("SU TARJETA DE CREDITO ES VALIDA");
    } else {
      alert("ERROR TARJETA INVALIDA");
    }
  } else {
    alert("Debe ingresar una tarjeta de credito");
  }

 }



function isValidCard(tarjeta) {
  var array_tc = new Array(16);

  var contador=0;
  for(var i = (tarjeta.length-1); i>=0; i--) {
    array_tc[contador] = tarjeta[i];
    contador=contador+1;
  }


  for(var i = 0; i<tarjeta.length; i++) {
    if((i%2)!=0){
      var valor = array_tc[i]*2;
      var nuevo_valor = valor;
      if(valor >= 10) {
        valor = valor.toString();
        nuevo_valor = parseInt(valor[0])+parseInt(valor[1]);
      }
      array_tc[i]=nuevo_valor;
    }
  }  


  var total=0;
  for(var i = 0; i<tarjeta.length; i++) {
    total=total+parseInt(array_tc[i]);
  }  

  if((total%10)==0) {
    return true;
  } else {
    return false;
  }

}

principal();
