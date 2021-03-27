const blockquote = document.querySelector('blockquote');
const quoteText = blockquote.querySelector('p'),
      quoteAuthor = blockquote.querySelector('cite');

document.addEventListener('DOMContentLoaded', function(){
    let randNum;
    let quotes;
    fetch('./js/quotes.json')
        .then(res => res.json())
        .then(data => quotes = data)
        .then(() => randNum = Math.floor(Math.random() * quotes["quotes"].length))
        //.then(() => console.log('randNum = ' + randNum))
        .then(() => quoteText.innerHTML =  quotes["quotes"][randNum]["text"])
        .then(() => quoteAuthor.innerHTML = quotes["quotes"][randNum]["author"]);
    
    //quoteText.innerHTML = dict["one"][randNum]["v"];
    //quoteAuthor.innerHTML = '&ndash; ' + randNum;
});