const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
    {
        skill: "./image/teste.webp",
        title: "VÍDEOS<br>\nANIMADOS",
    },
    {
        skill: "./image/icontwo.webp",
        title: "LANDING<br>\nPAGES",
    },
    {
        skill: "./image/teste2.webp",
        title: "NUGGETS<br>\nANIMADOS",
    },
    {
        skill: "./image/iconfour.webp",
        title: "CRIATIVOS<br>\nESTÁTICOS",
    },
];

videos.map(video => {
const cardClone = card.cloneNode(true);
cardClone.querySelector(".image img").src = video.skill
cardClone.querySelector(".text-medium p").innerHTML = video.title
sectionCards.appendChild(cardClone);
});

card.remove();

document.querySelector(".card:first-child .image").innerHTML += '<img id="rotate-anim" src="./image/expiral2.webp" alt="Animado" style="display: grid;margin: 0 auto;margin-top: -5.2rem;width: 3.4rem;margin-bottom: 1.75rem;">';
document.querySelector(".card:nth-child(3) .image").innerHTML += '<span id="circulo" style="font-size: 4.22rem;font-family: taho;display: block;margin: 0 auto;text-align: center;margin-top: -6.32rem;margin-bottom: 1.5rem;">.</span>';