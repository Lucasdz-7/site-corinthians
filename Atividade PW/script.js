var radio = document.querySelector('.bar') /* guardando a navegação manual*/
var cont = 1

document.getElementById('slide1').checked = true

setInterval(() => {
    proximaImg()
}, 4000)

function proximaImg(){
    cont++

    if(cont > 4){
        cont = 1
    }

    document.getElementById('slide'+cont).checked = true
}