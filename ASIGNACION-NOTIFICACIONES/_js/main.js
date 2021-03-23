var comprar = document.getElementById('totalPayment');
var remover = document.getElementById('del');
var agregar = document.getElementById('agregar');



function estilo1 (){
document.getElementById("notificacionComprar").style.display= "block";
 $("#notificacionComprar").delay(6500).fadeOut(1500,"swing");
}

 $("#totalPayment").click(function () {
                estilo1();
            });

 function estilo2 (){
document.getElementById("notificacionRemover").style.display= "block";
 $("#notificacionRemover").delay(6500).fadeOut(1500,"swing");
}

 $("#del").click(function () {
                estilo2();
            });

 function estilo3 (){
document.getElementById("notificacionAgregar").style.display= "block";
 $("#notificacionAgregar").delay(6500).fadeOut(1500,"swing");
}

 $("#agregar").click(function () {
                estilo3();
            });



