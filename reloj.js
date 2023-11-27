function displeytime() {
    var tiempo = new Date();
    var hora = tiempo.getHours();
    var minuto = tiempo.getMinutes();
    var segundo = tiempo.getSeconds();
    var session = "AM";

    if(hora >= 12) {
        session = "PM"
        hora = hora -12
    }

    if ( hora === 0) {
        hora = 12
    }



    document.getElementById('horas').innerHTML = formatTime(hora);
    document.getElementById('minutos').innerHTML = formatTime(minuto);
    document.getElementById('segundos').innerHTML = formatTime(segundo);
    document.getElementById('session').innerHTML = session
}

function formatTime(time) {
    return time <10 ? "0" + time : time
}

setInterval(displeytime, 10);