let generateFact = document.querySelector("#load");
let setQuote = document.querySelector("#set");
let author = document.querySelector("#author");
let quoteCard = document.querySelector(".quote-card");
let container =  document.querySelector(".container");

let getFact = async()=>{
    let response = await fetch("./quotes.json");
    let data = await response.json();
 
    
    let randomIdx = Math.floor(Math.random() *data.length);
    setQuote.innerText =data[randomIdx].quote;
    author.innerText = ` By ${data[randomIdx].character}`;
    
}

generateFact.addEventListener("click", getFact);








