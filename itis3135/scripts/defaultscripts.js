function displayCurrentDateTime() {
    const currentDate = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const formattedDate = currentDate.toLocaleString('en-US', options);
    document.getElementById('current-date-time').innerText = `Today is ${formattedDate}`;
}

document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = document.getElementById('user-name').value;
    const userMood = document.getElementById('user-mood').value;

    const greetingMessage = `${userName}, welcome to Luxurious Heron! We hear you are feeling ${userMood}!`;
    document.getElementById('greeting-message').innerText = greetingMessage;
});

function showBird() {
    let birdNumber = Math.abs(Math.round(document.getElementById('favorite-number').value));
    let birdName;

    switch (birdNumber) {
        case 1: birdName = 'Sparrow'; break;
        case 2: birdName = 'Pigeon'; break;
        case 3: birdName = 'Robin'; break;
        case 4: birdName = 'Eagle'; break;
        case 5: birdName = 'Falcon'; break;
        case 6: birdName = 'Hawk'; break;
        case 7: birdName = 'Owl'; break;
        case 8: birdName = 'Peacock'; break;
        case 9: birdName = 'Parrot'; break;
        case 10: birdName = 'Penguin'; break;
        default: birdName = `Bird number ${birdNumber}`; break;
    }

    alert(`The bird with number ${birdNumber} is called a ${birdName}.`);
}

document.getElementById('show-polygon-btn').addEventListener('click', showBird);

function provideInspiration() {
    alert("Just like a bird in flight, your potential is limitless.");
}

function provideJoke() {
    alert("Why do birds fly south in the winter? Because it’s faster than walking!");
}

function provideInsult() {
    alert("You're like a crow—loud, but no one really listens.");
}
document.getElementById('provide-inspiration-btn').addEventListener('click', provideInspiration);
document.getElementById('provide-joke-btn').addEventListener('click', provideJoke);
document.getElementById('provide-insult-btn').addEventListener('click', provideInsult);

window.onload = displayCurrentDateTime;
