const quoteContainer=document.getElementById('quote-container');
const text= document.getElementById("quote");
const authorText= document.getElementById('author');
const twitterBtn= document.getElementById('twitter');
const newQuoteBtn= document.getElementById('new-quote');



let apiQuotes= [];
//show new quote
function newQuote(){
    const quote=apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //checking if author is null
    if(!quote.author){
        authorText.textContent="Unknown"
    }
     else{
        authorText.textContent=quote.author;
          }
       
    if(quote.text.length>50){
        text.classList.add('long-quote');
    }  else{
        text.classList.remove('long-quote');
    }
    text.textContent=quote.text; 
                    }

async function getQuotes(){
    const apiUrl='https://type.fit/api/quotes'
    try{
        const response= await fetch(apiUrl);
        apiQuotes= await response.json();
        // console.log(apiQuotes[1])
        newQuote();
    }
    catch(error){
        alert('sorry')
    }
}
                // tweet quote
    function tweetQuote() {
        const twitterUrl=`https://twitter.com/intent/tweet?text=${text.textContent}-${authorText.textContent}`;
        window.open(twitterUrl,'_blank');
    }
   // newQuoteBtn.addEventListener('click',newQuote);
    twitterBtn.addEventListener('click',tweetQuote);
getQuotes();

let numCount =0;
function count() {
    numCount ++
    counter.innerText = numCount
}

