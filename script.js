let currentQuoteIndex = 0;
let currentAuthorIndex = 0;

function fetchQuotes() {
  fetch("https://type.fit/api/quotes")
  .then((res) => res.json())
  .then((data) => {
    displayQuote(data[currentQuoteIndex], data[currentAuthorIndex]);

    currentQuoteIndex = (currentQuoteIndex + 1) % data.length;
    currentAuthorIndex = (currentAuthorIndex + 1) % data.length;
  })
  // .catch((error) => {
  //   const errorMessage = document.getElementById('error');
  //   errorMessage.innerHTML = 'An Error Occured. check Internet Connection'
  // });
}


const displayQuote = (quote, author) => {
  const quoteText = document.querySelector("#quote");
  const authorText = document.querySelector("#quoteAuthor");

  const quoteElement = document.createElement("h3");
  const authorElement = document.createElement("p");

  quoteElement.innerText = quote.text;
  authorElement.innerText = author.author;

  quoteText.appendChild(quoteElement);
  authorText.appendChild(authorElement);
};
