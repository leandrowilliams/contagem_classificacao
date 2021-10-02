 var festa = window.prompt("Digite a quantidade de pessoas para a festa!")
for (let contador = 0; contador <= festa; contador ++) {
    if (contador % 2 == 0 && contador != 0){
       console.log(contador + "    PAR   está Classificado, bem vindo a festa, pode entrar. ")
    } else if  (contador % 2 != 0) {
       console.log(contador + "    IMPAR está Desclassificado, desculpe mais não pode entrar. ")
    } else { 
       console.log(contador + '\t numero "ZERO" 0')
    }
}