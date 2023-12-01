const quote = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const quoteBtn = document.querySelector(".btn-quote");
const tweetBtn = document.querySelector(".btn-tweet");

async function getNewQuote() {
  try {
    const response = await fetch("https://api.quotable.io/quotes/random");

    if (!response.ok) {
      throw new Error("Error fetching data...");
    }

    const data = await response.json();

    quote.innerHTML = "";
    quote.innerHTML = `<span class="quote-mark"><i class="fa-solid fa-quote-left fa-2xl" style="color: #42289f"></i
    ></span> ${data[0].content}`;
    quote.style.opacity = 1;
    quoteAuthor.innerHTML = "";
    quoteAuthor.innerHTML = data[0].author;
  } catch (error) {
    console.error(error.message);
  }
}

quoteBtn.addEventListener("click", getNewQuote);
