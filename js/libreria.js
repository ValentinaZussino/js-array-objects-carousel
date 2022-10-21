// PARI DISPARI
function isEven(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}
// PALINDROMO
function palindrome(str) {
    var lowStr = str.toLowerCase();
    var reverseStr = lowStr.split('').reverse().join(''); 
    return reverseStr === lowStr;
}
// NUMERO RANDOM
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// CREAZIONE CARDS
function cardsGenerator(object){
    const card = document.createElement('div');
    card.className = 'col-md-4 col-sm-12 d-flex flex-column text-center';
    const divTxt = document.createElement('div');
    divTxt.className = '';
    for(let key in object){ 
        if(key == 'foto'){
            const imgDiv = document.createElement('div');
            imgDiv.className = 'card-img text-center mb-3 mt-5';
            imgDiv.innerHTML = object[key];
            card.appendChild(imgDiv);
        } else if(key == 'nome'){
            const spanName = document.createElement('span');
            spanName.className = 'fw-bold';
            spanName.innerHTML = `
            ${object[key]}
            <br>
            `;
            divTxt.appendChild(spanName);
        } else if(key == 'ruolo'){
            const spanRole = document.createElement('span');
            spanRole.className = '';
            spanRole.innerHTML = `
            ${object[key]}
            `;
            divTxt.appendChild(spanRole);
        }
        card.appendChild(divTxt);
    }
    return card;
}