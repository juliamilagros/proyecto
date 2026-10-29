
// ACTIVIDAD 1: CUESTIONARIO

function corregirCuestionario() {
    let correctas = 0;

    let respuesta1 = document.getElementById("p1").value;
    let respuesta2 = document.getElementById("p2").value;
    let respuesta3 = document.getElementById("p3").value;
    let respuesta4 = document.getElementById("p4").value;

    if (respuesta1 == "1902") {
        correctas++;
    }

    if (respuesta2 == "escolapio") {
        correctas++;
    }

    if (respuesta3 == "martir") {
        correctas++;
    }

    if (respuesta4 == "1995") {
        correctas++;
    }

    document.getElementById("resultado").innerHTML =
        "Respondiste correctamente " + correctas + " de 4 preguntas.";
}


// ACTIVIDAD 2: LÍNEA DE TIEMPO

function comprobarLineaTiempo() {
    let puntos = 0;

    let nacimiento = document.getElementById("a1").value;
    let muerte = document.getElementById("a2").value;
    let beatificacion = document.getElementById("a3").value;

    if (nacimiento == "1902") {
        puntos++;
    }

    if (muerte == "1936") {
        puntos++;
    }

    if (beatificacion == "1995") {
        puntos++;
    }

    document.getElementById("resultadoActividad").innerHTML =
        "Obtuviste " + puntos + " de 3 respuestas correctas.";
}

