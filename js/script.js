// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come sempre focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

/* <div class="position-relative">
                    <img id="big-svezia" src="http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg" alt="svezia">
                    <div id="img-description" class="text-white">
                        <span>Svezia</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis vel repellat illum perferendis deserunt rerum magnam.</p>
                    </div>
                </div> */

// MILESTONE 1
// inizio a creare array oggetti
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];
// prendo container al quale appendo poi con una funzione il div per le foto grandi ....e poi div testo, con html
const bigImagesContainer = document.getElementById('big-images-container');
bigImagesDivGenerator(images);
function bigImagesDivGenerator(images){ 
    for(let objects of images){
    const bigImageDiv = document.createElement('div');
    bigImageDiv.className = 'position-relative js-dnone d-none';
    bigImageDiv.innerHTML = `<img id="big-svezia" src="${objects.url}" alt="" class="big-images">
    <div id="img-description" class="text-white">
        <span>${objects.title}</span>
        <p>${objects.description}</p>
    </div>`
    bigImagesContainer.append(bigImageDiv);
    }
    // right();
    dnoneToggleLeft();
    
}

// le devo far sparire e riapparire con toggle, devo farlo funzionare ai click delle frecce
function dnoneToggleLeft(){
    let dnone = 0;
    const imagesToggle = document.querySelectorAll('.js-dnone');
    console.log(imagesToggle);
    imagesToggle[dnone].classList.toggle('d-none');
    const frecciaBtn = document.getElementById('arrow-left');
    frecciaBtn.addEventListener('click', function(){
        imagesToggle[dnone].classList.toggle('d-none');
        if(dnone == 4){
            dnone = 0;
            imagesToggle[dnone].classList.toggle('d-none');
            console.log(dnone)
        }else{
            dnone++;
            imagesToggle[dnone].classList.toggle('d-none');
            console.log(dnone)
        }
    })
}
// function right(){
//     let dnone = 0;
//     const imagesToggle = document.querySelectorAll('.js-dnone');
//     console.log(imagesToggle);
//     imagesToggle[dnone].classList.toggle('d-none');
//     const frecciaBtn = document.getElementById('arrow-right');
//     frecciaBtn.addEventListener('click', function(){
//         imagesToggle[dnone].classList.toggle('d-none');
//         if(dnone == 0){
//             dnone = 4;
//             imagesToggle[dnone].classList.toggle('d-none');
//             console.log(dnone)
//         }else{
//             dnone--;
//             imagesToggle[dnone].classList.toggle('d-none');
//             console.log(dnone)
//         }
//     })
// }
