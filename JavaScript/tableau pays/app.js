const first = document.querySelectorAll('.first')
const mid = document.querySelector('.mid')
const nom = document.querySelector('.name')

let index = 0

first.forEach(item => {

    item.addEventListener('click', () => {

        index = item.getAttribute('data-anim')

        switch (index){
            case '1':
                document.getElementById('second').src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/langfr-225px-Flag_of_France.svg.png';
                nom.innerHTML = 'France'
            break;
            case '2':
                document.getElementById('second').src = 'https://www.atlas-monde.net/wp-content/uploads/2016/03/drapeau-etats-unis.jpg';
                nom.innerHTML = 'États-Unis'
            break;
            case '3':
                document.getElementById('second').src = 'https://www.ccifrance-international.org/fileadmin/_processed_/a/3/csm_drapeau_allemagne_a74a4b9a72.jpg';
                nom.innerHTML = 'Allemagne'
            break;
        }
        
    }) 

})