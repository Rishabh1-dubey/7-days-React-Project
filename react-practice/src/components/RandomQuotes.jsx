import React, { useState } from "react";

const RandomQuotes = () => {
  const quotes = ["belive in yourself", "you can do it", "common man"];

  const [quote, setQuote] = useState("");

  const quoteHandler = () => {
    const randomQuotes = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomQuotes]);
  };

console.log(quote)


  return (
    <div>
      <h1>Random qutoes Generator</h1>
      {quote && <p>{quote}</p> }
      <button onClick={quoteHandler}>Add</button>
    </div>
  );
};

export default RandomQuotes;
