const intitule = document.getElementById("intitule");
const somme = document.getElementById("somme");
const btnAdd = document.getElementById("btnAjouter");
const liste = document.getElementById("listDep");
const span = document.getElementById("total");

let totalDepenses = 0;

btnAdd.addEventListener('click', () => {

    if (intitule.value.trim().length == 0 || somme.value.trim().length == 0) {
        return;
    }

    console.log(intitule.value, somme.value);
    const nouvelleDep = `${intitule.value.trim()} : ${somme.value.trim()} TND`;
    const newLi = document.createElement('li');
    newLi.textContent = nouvelleDep;
    //console.log(newLi.classList);
    newLi.classList.add('list-group-item');
    // newLi.classList.add('list-group-item', "nidhal", "nassim");
    // newLi.classList.add('nidhal');
    // newLi.classList.add('nassim');
    // console.log(newLi.classList.value);
    // console.log(newLi.classList.value.split(' '));


    liste.appendChild(newLi);
    // totalDepenses += Number(somme.value); // ou utiliser un parsing
    totalDepenses += +somme.value;
    span.textContent = `${totalDepenses} TND`;










})
//btnAdd.addEventListener('click', traitement()) // Erreur

