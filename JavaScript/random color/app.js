const btn = document.querySelector('.btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {

   changeColor()

})


function changeColor(){

    setInterval(() => {

        let random = '#'+Math.floor(Math.random()*16777215).toString(16);

        document.body.style.backgroundColor = random
        color.innerHTML = random

    }, 1200)
    
}