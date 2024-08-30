let quotes = [
    "The best way to predict the future is to create it.",
    "Do not watch the clock. Do what it does. Keep going.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Your time is limited, don't waste it living someone else's life."
];

let favoriteQuotes = [];

function displayRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.innerText = quotes[randomIndex];
}

function addNewQuote() {
    const newQuoteInput = document.getElementById('newQuoteInput');
    const newQuote = newQuoteInput.value.trim();

    if (newQuote) {
        quotes.push(newQuote);
        newQuoteInput.value = "";
        alert('New quote added successfully!');
    } else {
        alert('Please enter a quote before adding.');
    }
}

function saveFavoriteQuote() {
    const currentQuote = document.getElementById('quoteDisplay').innerText;

    if (currentQuote && !favoriteQuotes.includes(currentQuote)) {
        favoriteQuotes.push(currentQuote);
        displayFavoriteQuotes();
    }
}

function displayFavoriteQuotes() {
    const favoriteQuotesList = document.getElementById('favoriteQuotesList');
    favoriteQuotesList.innerHTML = "";

    favoriteQuotes.forEach(quote => {
        const li = document.createElement('li');
        li.innerText = quote;
        favoriteQuotesList.appendChild(li);
    });
}

document.getElementById('newQuoteButton').addEventListener('click', displayRandomQuote);
document.getElementById('addQuoteButton').addEventListener('click', addNewQuote);
document.getElementById('favoriteButton').addEventListener('click', saveFavoriteQuote);

displayRandomQuote();
