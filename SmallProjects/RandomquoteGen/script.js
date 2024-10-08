const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Life is what happens to you while you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        author: "Robert Frost"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison"
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
        author: "Mark Twain"
    }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

const functionToGenerateQuote = ()=>{
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex].quote;
    authorElement.textContent = quotes[randomIndex].author;
}
newQuoteButton.addEventListener('click',functionToGenerateQuote);