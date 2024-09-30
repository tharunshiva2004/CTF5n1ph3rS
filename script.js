const comics = [
    {
        title: "Spider-Man: The Night Gwen Stacy Died",
        description: "A pivotal moment in Spider-Man's history.",
    },
    {
        title: "X-Men: Days of Future Past",
        description: "A classic storyline involving time travel and alternate futures.",
    },
    {
        title: "The Avengers: The Kree-Skrull War",
        description: "A cosmic conflict that brings the Avengers to the forefront.",
    },
    {
        title: "Iron Man: Demon in a Bottle",
        description: "A deep dive into Tony Stark's struggles with alcoholism.",
    },
    {
        title: "Thor: The Mighty Thor",
        description: "The adventures of the God of Thunder in both Asgard and Earth.",
    },
];

const comicGrid = document.getElementById('comicGrid');
const modal = document.getElementById('comicModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.getElementsByClassName('close')[0];

// Populate the comic grid
comics.forEach(comic => {
    const comicCard = document.createElement('div');
    comicCard.className = 'comic-card';
    comicCard.innerHTML = `<h3>${comic.title}</h3>`;
    comicCard.addEventListener('click', () => {
        modalTitle.textContent = comic.title;
        modalDescription.textContent = comic.description;
        modal.style.display = "block";
    });
    comicGrid.appendChild(comicCard);
});

// Close the modal when the user clicks on <span> (x)
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
