 // 1 es piedra, 2 es papel y 3 es tijera
            
            
     //FUNCIONES

         //  **OPCIÓN LARGA DE ALEATORIZAR LA DECISIÓN DE LA PC
            //*establecemos el máximo y el mínimo de los valores que puede elegir la pc
                 //let min = 1;
                 //let max = 3;
                //let pc = Math.floor (Math.random()* (max - min + 1) + min); //*fórmula de elección aleatoria de la pc
           
        //  **OPCIÓN RÁPIDA DE ALEATORIZAR LA DECISIÓN DE LA PC
            function aleatorio (min, max) {
                return Math.floor (Math.random()* (max - min + 1) + min)
            };
        
         // **OPCIÓN CORTA PARA LAS DECISIONES DEL JUGACOR Y PC
            function eleccion (jugada) {
                let resultado = ""
                if (jugada==1) {
                    resultado = "piedra 🥌🥌"
                } else if (jugada==2) {
                    resultado = "papel 📰📰"
                } else if (jugada==3) {
                    resultado = "tijera ✂✂"
                } else {
                    resultado = "algo diferente entre 1, 2 y 3"
                }
                return resultado 
            };
        
    //Declarar variables       
        let jugador = 0;
        let pc = 0;
        let triunfos = 0;
        let perdidas = 0;

    //Ciclo hasta que haya un ganador por tres veces
        while (triunfos < 3 && perdidas < 3) {
            //Dar los valores de los parámetros de pc (min, max)
            pc = aleatorio (1,3);
            //Pedir la elección del jugador
            jugador = prompt("Elige: 1 para piedra 🥌, 2 para papel 📰 y 3 para tijera ✂");

        //**OPCIÓN LARGA PARA LAS DECISIONES DEL JUGADOR Y PC    
            //Decisión jugador
            //    if (jugador==1) {
            //        alert ("Elegiste piedra 🥌🥌")
            //    } else if (jugador==2) {
            //        alert ("Elegiste papel 📰📰")
            //    } else if (jugador==3) {
            //        alert ("Elegiste tijera ✂✂")
            //    } else {
            //        alert ("Elije una opción entre 1, 2 y 3")
            //    };
            //Decisión computadora
            //    if (pc==1) {
            //        alert ("PC elige piedra 🥌🥌")
            //    } else if (pc==2) {
            //        alert ("PC elige papel 📰📰")
            //    } else if (pc==3) {
            //        alert ("PC elige tijera ✂✂")
            //    };
        
        //avisos de elección del jugador y la PC        
            alert ("Tu eliges: " + eleccion (jugador)); 
            alert ("PC elige: " + eleccion (pc));
            

        //Combate
            //**OPCIÓN LARGA DEL COMBATE
                //if(pc == jugador) {
                    //alert("Hay un empate 😮😮")
                //} else if (jugador == 1 && pc == 3) {
                    //alert ("GANASTE! 🥳🥳")
                    //triunfos = triunfos + 1
                //} else if (jugador == 2 && pc == 1) {
                    //alert ("GANASTE! 🥳🥳")
                    //triunfos = triunfos + 1
                //} else if (jugador == 3 && pc == 2) {
                    //alert ("GANASTE! 🥳🥳")
                    //triunfos = triunfos + 1
                //} else {
                    //alert ("Perdiste 😭😭")
                    //perdidas = perdidas + 1
                //};

            //**OPCION CORTA DEL COMBATE
                if (jugador == pc) {
                    alert ("Hay un empate 😮😮")
                } else if ((jugador == 1 && pc == 3) || (jugador == 3 && pc == 2) || (jugador == 2 && pc == 1)) {
                    alert ("GANASTE! 🥳🥳")
                    triunfos++
                } else {
                    alert ("Perdiste 😭😭")
                    perdidas++
                };

    }

    alert ("Ganaste 🥳 " + triunfos + " veces y perdiste 😭 " + perdidas + " veces.")