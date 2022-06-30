function snapCrackle (maxValue) {
    let retorno = "";
    for (let contador = 1; contador <= maxValue; contador++){
        if ((contador % 2 != 0) && (contador % 5 == 0)) { //multiplo de 5
            retorno+= " SnapCrackle, "
        }else if (contador % 2 != 0) {  
            retorno+= " Snap, "           
        }else if (contador % 5 == 0) {
            retorno+= " Crackle, "
        }else{
            retorno+= (`${contador}`)
        }
    }
        return console.log(retorno)
}       
snapCrackle();


// O que imprime
// Snap, 2, Snap, 4, SnapCrackle, 6, Snap, 8, Snap, Crackle, Snap, 12

// O que pediu
// Snap, 2 Snap, 4 SnapCrackle, 6 Snap, 8 Snap,  Crackle,  Snap, 12