const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')


let totalHT = document.querySelector('.totalHT')
const tva = document.querySelector('.TVA')
const total = document.querySelector('.total')

const res1 = document.querySelector('.value1')
const res2 = document.querySelector('.value2')

let date = new Date()
let jour = date.getDate()
let mois = date.getMonth()
let annee = date.getFullYear()
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()


window.addEventListener('click', charger)

function charger() {

    let tot = res1.innerHTML = num1.value * 50
    let tot2 = res2.innerHTML = num2.value * 20

    let valeur = res1.getAttribute('value')
    let valeur2 = res2.getAttribute('value')

    let test1 = valeur = tot
    let test2 = valeur2 = tot2
    
    let totHT = totalHT.innerHTML = test1 + test2

    let tévéa = tva.innerHTML = totHT * 22 / 100

    let bigTotal = total.innerHTML = totHT + tévéa

    if (bigTotal >= 700){
        total.style.color = 'red'
    } else {
        total.style.color = 'rgb(223, 223, 79)'
    }

}

document.querySelector('.date').innerHTML = `Facturé le ${jour} Septembre ${annee} fait a ${hour}h ${minute}m et ${second}s`