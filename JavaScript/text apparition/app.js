const text = document.querySelector('.text')
const tabText = ['Premier text', 'Deuxième text', 'Troisième text', 'Quatrième text']
let index = 0;

for (let i = 0; i < tabText.length; i++){

    setTimeout(() => {

        if (i > 3){
            text.innerHTML = tabText[i][0]
        } else {
            text.innerHTML = tabText[i]
        }

    }, i * 500)

}