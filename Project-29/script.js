document.getElementById("btn").addEventListener("click", () => {
  async function getNewQuote() {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      const quoteText = document.getElementById("quote");
      const author = document.getElementById("author");
      quoteText.innerHTML = data.quote;
      author.innerHTML = `—${data.author}`;
    } catch (error) {
      alert("Oops, something went wrong!");
      console.error("Oops, something went wrong!", error);
    }
  }

  getNewQuote();
});
