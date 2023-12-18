let currentQuoteIndex = 0;
let currentAuthorIndex = 0;

// Fetch quotes from the API and display the initial quote
fetchQuotes();

function fetchQuotes() {
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      displayQuote(data[currentQuoteIndex], data[currentAuthorIndex]);

      currentQuoteIndex = (currentQuoteIndex + 1) % data.length;
      currentAuthorIndex = (currentAuthorIndex + 1) % data.length;
    })
    .catch((error) => {
      console.error("Error fetching quotes:", error);
    });
}

const displayQuote = (quote, author) => {
  const quoteText = document.querySelector("#quote");
  const authorText = document.querySelector("#quoteAuthor");

  // Clear existing content
  quoteText.innerHTML = "";
  authorText.innerHTML = "";

  const quoteElement = document.createElement("h3");
  const authorElement = document.createElement("p");

  quoteElement.innerText = quote.text;
  authorElement.innerText = author.author;

  quoteText.appendChild(quoteElement);
  authorText.appendChild(authorElement);
};