const petScreen = document.querySelector('.pet-screen');
let pet = document.querySelector('.sprite');
let petNameDisplay = document.querySelector('.pet-name-display');
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
    petNameDisplay.innerHTML = petName;
    // Starts the hatching countdown
    setTimeout(startHatching, 10000);
}

function startHatching() {
    hatchEgg();
    setTimeout(babyIdle, 5000);
}

function hatchEgg() {
    pet.classList.add('hatching');
}

function babyIdle() {
    pet.classList.remove('hatching');
    pet.classList.add('baby-idle');
}

initializeGame();