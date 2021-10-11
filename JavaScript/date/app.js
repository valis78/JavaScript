function AfficherMois(annee,mois){
    let d = new Date();
    let aujourdhui = d.getDate();
    let mc = d.setMonth(mois);
    let ma = d.setFullYear(annee);
    d.setDate(1);
    
    pj = d.getDay();
    
    mc = d.getMonth();
    st = "<table>";
    st += '<caption>mois : ' +libelleMois(mois + 1) + '/' + annee + '</caption>'
    st += "<tr><th>Dim</th><th>Lun</th><th>Mar</th><th>Mer</th><th>Jeu</th><th>Ven</th><th>Sam</th>";
    st += "<tr>";
    if (pj > 0) {
        for (k = 1; k <= pj; k++)
            st += "<td></td>";
    }
    for (j = 1; j <= 31; j++) {
        if (((j+pj)%7)==1)
            st  +="<tr>";

        d.setDate(j);
        if (mc === d.getMonth()) {
            if (j == aujourdhui)
                st += "<td id=today>"+j+"</td>";
            else if (d.getDay() == 0)
                st += "<td class=conge>"+j+"</td>";
            else if (d.getDay() == 6)
                st += "<td class=demiconge>"+j+"</td>";
            else 
                st += "<td>"+j+"</td>";                           
        }                
    }
    st += "</table>";
    return st;
}

function AfficherAnnee(iddiv){
    let an = new Date();
    st2 = "<table><caption>Annee "+an.getFullYear()+"</caption>";

    // 3 rangees de 4 mois
    for (rangee = 0; rangee < 3; rangee++){
        st2 += "<tr>";
        for (colonne = 0; colonne <4 ; colonne++)
            st2 = st2 + "<td>" + AfficherMois(an.getFullYear(),rangee*4+colonne)+"</td>";
    }
    st2 = st2 +"</table>";
    document.getElementById(iddiv).innerHTML = st2;

}




function libelleMois(m) {
    switch (m) {
        case 1:
            return 'Janvier'
        case 2:
            return 'Fevrier'
        break;
        case 3:
            return 'Mars'
        break;
        case 4:
            return 'Avril'
        break;
        case 5:
            return 'Mai'
        break;
        case 6:
            return 'Juin'
        break;
        case 7:
            return 'Juillet'
        break;
        case 8:
            return 'Aôut'
        break;
        case 9:
            return 'Septembre'
        break;
        case 10:
            return 'Octobre'
        break;
        case 11:
            return 'Novrembre'
        break;
        case 12:
            return 'Décembre'
        break;
    }
}
