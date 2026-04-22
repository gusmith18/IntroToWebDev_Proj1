const factText = document.getElementById('factText');
const button = document.getElementById('newFactBtn');

let facts = [];

fetch('facts.json')
    .then(res => res.json()) // Convert the response to a JavaScript object
    .then(data => {
        facts = data;
        showRandomFact();
    })
    .catch(err => { //GIVEN
        // If something goes wrong (e.g., no internet), show a message
        factText.textContent = 'Could not load fact.';
        console.error(err); // Print the actual error to the console for debugging
    });

function showRandomFact() {
    if (facts.length === 0) {
        return;
    }
    const randomIndex = Math.floor(Math.random() * facts.length);

    const selected = facts[randomIndex];

    factText.textContent = selected.fact;
}

// When the button is clicked, call the function to show a new random quote
// button and addEventListener click and call above function 
button.addEventListener('click', showRandomFact);