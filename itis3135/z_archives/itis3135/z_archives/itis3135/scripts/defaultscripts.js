function displayCurrentDateTime() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = currentDate.toLocaleString('en-US', options);
    document.getElementById('currentDateTime').innerText = `Today is ${formattedDate}`;
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const userMood = document.getElementById('userMood').value;

    const greetingMessage = `${userName}, welcome to {Your Company Name}! We're glad you are feeling ${userMood}!`;
    document.getElementById('greetingMessage').innerText = greetingMessage;
});

function showPolygon() {
    let numberOfSides = Math.abs(Math.round(document.getElementById('favoriteNumber').value));
    let polygonName;

    switch (numberOfSides) {
        case 0: polygonName = 'Monogon'; break;
        case 1: polygonName = 'Monogon'; break;
        case 2: polygonName = 'Digon (or Bigon)'; break;
        case 3: polygonName = 'Triangle'; break;
        case 4: polygonName = 'Quadrilateral'; break;
        case 5: polygonName = 'Pentagon'; break;
        case 6: polygonName = 'Hexagon'; break;
        case 7: polygonName = 'Heptagon'; break;
        case 8: polygonName = 'Octagon'; break;
        case 9: polygonName = 'Nonagon'; break;
        case 10: polygonName = 'Decagon'; break;
        default: polygonName = 'Polygon with ' + numberOfSides + ' sides'; break;
    }

    alert(`The polygon with ${numberOfSides} sides is called a ${polygonName}.`);
}

function provideInspiration() {
    alert("Remember: Mindset matters.");
}

function calculateTax() {
    const amount = prompt("Enter the amount:");
    const taxRate = 0.07;
    const total = amount * (1 + taxRate);
    alert(`Total amount including tax is: $${total.toFixed(2)}`);
}

function provideJoke() {
    alert("Why did the chicken join a band? Because it had the drumsticks!");
}

function calculateSum() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const sum = num1 + num2;
    alert(`The sum is: ${sum}`);
}

function provideInsult() {
    alert("You have the perfect face for radio!");
}

window.onload = displayCurrentDateTime;
