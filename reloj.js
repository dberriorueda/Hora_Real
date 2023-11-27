function displeytime() {
    var tiempo = new Date();
    console.log("tiempo");
    var hora = tiempo.getHours();
    var minuto = tiempo.getMinutes();
    var segundo = tiempo.getSeconds();
    var session = document.getElementById('session');



    document.getElementById('horas').innerHTML = hora;
    document.getElementById('minutos').innerHTML = minuto;
    document.getElementById('segundos').innerHTML = segundo;
}
setInterval(displeytime, 10);