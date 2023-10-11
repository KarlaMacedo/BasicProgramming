alert("Bienvenido al juego creado por KPMM")

//VARIABLES GLOBALES
    let ataqueJugador = ""
    let ataqueEnemigo = ""
    let vidasJugador = 3
    let vidasEnemigo = 3
        
//FUNCIONES
    //FUNCIÓN PARA INICAR EL JUEGO
    function iniciarJuego(){
        //OCULTAR SECCIÓN DE SELECCIONAR ATAQUE EN EL JUEGO
            let sectionSeleccionarAtaque = document.getElementById ("seleccionar-ataque")
            sectionSeleccionarAtaque.style.display = "none"

        //OCULTAR BOTON DE REINICAR
            let sectionReiniciar = document.getElementById ("reiniciar")
            sectionReiniciar.style.display = "none"    

        //BOTON DE SELECCION DE MASCOTA POR EL JUGADOR
            let botonMascotaJugador = document.getElementById("boton-mascota")
            botonMascotaJugador.addEventListener ("click", seleccionarMascotaJugador)  

        //BOTONES DE ATAQUES SELECCIONADOS POR EL JUGADOR
            let botonFuego = document.getElementById("boton-fuego")
            botonFuego.addEventListener ("click", ataqueFuego)  
            let botonAgua = document.getElementById("boton-agua")
            botonAgua.addEventListener ("click", ataqueAgua) 
            let botonTierra = document.getElementById("boton-tierra")
            botonTierra.addEventListener ("click", ataqueTierra) 

        //BOTÓN DE REINICIAR
            let botonReiniciar = document.getElementById ("boton-reiniciar")
            botonReiniciar.addEventListener ("click", reiniciarJuego)

    }
    
    //FUNCIÓN PARA SELECCIÓNAR UNA MASCOTA POR EL JUGADOR
    function seleccionarMascotaJugador () {
        //OCULTAR SECCIÓN DE SELECCIONAR MASCOTA
            let sectionSeleccionarMascota = document.getElementById ("seleccionar-mascota")
            sectionSeleccionarMascota.style.display = "none"
        
         //MOSTRAR SECCIÓN DE SELECCIONAR ATAQUE EN EL JUEGO
            let sectionSeleccionarAtaque = document.getElementById ("seleccionar-ataque")
            sectionSeleccionarAtaque.style.display = "block"

        //VARIABLES DE LOS INPUT O SELECCIÓN DE CADA MASCOTA
            let inputHipodoge = document.getElementById("hipodoge")
            let inputCapipepo = document.getElementById("capipepo")
            let inputRatigueya = document.getElementById("ratigueya")
        //VARIABLE QUE VA A CONTENER LA RESPUESTA DE LA MASCOTA DEL JUGADOR
            let spanMascotaJugador = document.getElementById("mascota-jugador")
        //VERIFICAR QUÉ INPUT FUE SELECCIONADO
            if (inputHipodoge.checked) {
                spanMascotaJugador.innerHTML = "Hipodoge"
                alert ("Seleccionaste a Hipodoge!!")
            } else if (inputCapipepo.checked) {
                spanMascotaJugador.innerHTML = "Capipepo"
                alert ("Seleccionaste a Capipepo!!")
            } else if (inputRatigueya.checked) {
                spanMascotaJugador.innerHTML = "Ratigueya"
                alert ("Seleccionaste a Ratigueya!!")
            } else {
                alert ("Por favor, selecciona una opción de mascota")
            }
            
        //LLAMAR FUNCIÓN DE LA SELECCIÓN DE LA MASCOTA DEL ENEMIGO
            seleccionarMascotaEnemigo()    
    }

    //FUNCIÓN DE SELECCIÓN ALEATORIA DE LA MASCOTA DEL ENEMIGO
    function seleccionarMascotaEnemigo() {
        //VARIABLE QUE CONTIENE EL NÚMERO ALEATORIO QUE VA A REPRESENTAR LA ELECCION ALEATORIA DE LA MASCOTA DEL ENEMIGO
            let mascotaAleatoria =  aleatorio (1,3)
        //VARIABLE QUE VA A CONTENER LA MASCOTA DEL ENEMIGO
            let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

        // 1 HIPODOGUE 2 CAPIPEPO 3 RATIGUEYA
            if (mascotaAleatoria == 1) {
                spanMascotaEnemigo.innerHTML = "Hipodoge"
                alert ("Tu enemigo seleccionó a Hipodoge")
            } else if (mascotaAleatoria == 2) {
                spanMascotaEnemigo.innerHTML = "Capipepo"
                alert ("Tu enemigo seleccionó a Capipepo")
            } else {
                spanMascotaEnemigo.innerHTML = "Ratigueya"
                alert ("Tu enemigo seleccionó a Ratigueya")
            }
    }

    //FUNCIÓN ATAQUE FUEGO
    function ataqueFuego () {
        ataqueJugador = "FUEGO 🔥"
        ataqueAleatorioEnemigo ()
    }

    //FUNCIÓN ATAQUE AGUA
    function ataqueAgua () {
        ataqueJugador = "AGUA 💧"
        ataqueAleatorioEnemigo ()
    }

    //FUNCIÓN ATAQUE TIERRA
    function ataqueTierra () {
        ataqueJugador = "TIERRA 🌱"
        ataqueAleatorioEnemigo ()
    }

    //FUNCIÓN DE SELECCIÓN ALEATORIA DEL ATAQUE DEL ENEMIGO
    function ataqueAleatorioEnemigo() {
        let ataqueAleatorio =aleatorio (1,3)

        // 1 FUEGO 2 AGUA 3 TIERRA
            if (ataqueAleatorio == 1) {
                ataqueEnemigo = "FUEGO 🔥"
            } else if (ataqueAleatorio == 2) {
                ataqueEnemigo = "AGUA 💧"
            } else {
                ataqueEnemigo = "TIERRA 🌱"
            }   

        combate () 
    }

    //FUNCIÓN DE ELECCIÓN ALEATORIA ENTRE UN VALOR MINIMO Y UNO MÁXIMO
    function aleatorio (min, max) {
        return Math.floor (Math.random()* (max - min + 1) + min)
    }

    //FUNCIÓN DEL COMBATE
    function combate () {
        //VARIABLES DE LAS VIDAS
            let spanVidasJugador = document.getElementById ("vidas-jugador")
            let spanVidasEnemigo = document.getElementById ("vidas-enemigo")
        
        //RUTAS DEL COMBATE
            if (ataqueJugador == ataqueEnemigo) {
                crearMensaje ("Hay un empate 😮😮")
            } else if ((ataqueJugador == "FUEGO 🔥" && ataqueEnemigo == "TIERRA 🌱") || (ataqueJugador == "TIERRA 🌱" && ataqueEnemigo == "AGUA 💧") || (ataqueJugador == "AGUA 💧" && ataqueEnemigo == "FUEGO 🔥")) {
                crearMensaje ("GANASTE! 🥳🥳")
                vidasEnemigo--
                spanVidasEnemigo.innerHTML = vidasEnemigo
            } else {
                crearMensaje ("Perdiste 😭😭")
                vidasJugador--
                spanVidasJugador.innerHTML = vidasJugador
            }

        //REVISAR LAS VIDAS DESPUÉS DE CADA COMBATE PARA VER SI CONTINUA O NO
            revisarVidas()
    }


    //FUNCIÓN DE REVISAR VIDAS
    function revisarVidas (){
        if (vidasEnemigo == 0){
            crearMensajeFinal("FELICITACIONES!!! GANASTE TRAS TODOS TUS COMBATES 🥳🥳")
        } else if (vidasJugador == 0) 
            crearMensajeFinal("Perdiste 😭😭, lo siento. SUERTE PARA LA PRÓXIMA!")
    }
   
    //FUNCIÓN PARA CREAR NUEVOS MENSAJES EN EL HTML PARA MOSTRAR RESULTADOS POR CADA COMBATE
    function crearMensaje (resultado) {
        //VARIABLE DE LA SECCIÓN DONDE VOY A INSERTAR MI MENSAJE
            let sectionMensajes = document.getElementById ("mensajes")
        //VARIABLE DEL PÁRRAFO CON EL MENSAJE QUE VOY A CREAR EN MI HTML
            let parrafo = document.createElement ("p")
            parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + ", por lo que " + resultado
        //INSTRUCCIÓN DE DÓNDE INSERTAR EL MENSAJE QUE CREÉ
            sectionMensajes.appendChild(parrafo)
    }

    //FUNCIÓN PARA CREAR NUEVO MENSAJE EN EL HTML PARA MOSTRAR RESULTADOS FINAL
    function crearMensajeFinal (resultadoFinal) {
        //VARIABLE DE LA SECCIÓN DONDE VOY A INSERTAR MI MENSAJE
            let sectionMensajes = document.getElementById ("mensajes")
        //VARIABLE DEL PÁRRAFO CON EL MENSAJE QUE VOY A CREAR EN MI HTML
            let parrafo = document.createElement ("p")
            parrafo.innerHTML = resultadoFinal
        //INSTRUCCIÓN DE DÓNDE INSERTAR EL MENSAJE QUE CREÉ
            sectionMensajes.appendChild(parrafo)

        //DESHABILITAR BOTONES DE ATAQUES
            let botonFuego = document.getElementById("boton-fuego")
            botonFuego.disabled = true
            let botonAgua = document.getElementById("boton-agua")
            botonAgua.disabled = true
            let botonTierra = document.getElementById("boton-tierra")
            botonTierra.disabled = true

        //OCULTAR BOTON DE REINICAR
            let sectionReiniciar = document.getElementById ("reiniciar")
            sectionReiniciar.style.display = "block"  
    }

    //FUNCION PARA REINICAR EL JUEGO
    function reiniciarJuego () {
        location.reload ()
    }
    
    window.addEventListener("load", iniciarJuego)