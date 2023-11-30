const petScreen = document.querySelector('.pet-screen');
let pet = document.querySelector('.sprite');
let happiness = 100;
let fullness = 100;
let cleanliness = 100;

function initializeGame() {
    let petName = '';
    while (!petName) {
        petName = prompt("What will you name your pet?");
        if (petName === null) {
            petName = "Pisky";
        }
    }
    pet.style.display = 'flex';
    alert(`Thanks for playing! ${petName}'s egg will hatch soon...`);
}

initializeGame();