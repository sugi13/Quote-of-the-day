let Button = document.querySelector(".get-btn")
let QuoteArea = document.getElementById("quote");
let Author = document.getElementById("author");
let quoteContainer = document.querySelector(".content");


let quotesHolder = [
    {
        quote: "Do what is right, not what is easy nor what is popular.",
        author: "—Roy T. Bennett"
    },
    {
        quote: "Start where you are. Use what you have. Do what you can",
        author: " —Arthur Ashe"
    },
    {
        quote: "By changing nothing, nothing changes.",
        author: "—Tony Robbins"
    },
    {
        quote: "Fear is forward. No one is afraid of yesterday.",
        author: "—Renata Adler"
    },
    {
        quote: "For every minute you are angry, you lose sixty seconds of happiness.",
        author: "—Ralph Waldo Emerson"
    },
    {
        quote: "Do one thing every day that scares you",
        author: " —Eleanor Roosevelt"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "—Walt Disney"
    },
    {
        quote: "Go confidently in the direction of your dreams! Live the life you’ve imagined.",
        author: "—Henry David Thoreau"
    }
];

function generateAQuote(){
    let random = quotesHolder[Math.floor(Math.random() * quotesHolder.length)];

    QuoteArea.innerHTML = random.quote;
    Author.innerHTML = random.author;

    quoteContainer.classList.add("create");
}
Button.addEventListener("click", generateAQuote);

// create a disable function //
setTimeout(function(){
    setTimeout(() => {
    alert("Come back tomorrow to get a quote")
    Button.disabled = true;
}, 2000);
}, 1000)