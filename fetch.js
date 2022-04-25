// JavaScript Document

/* Step One 

/* Fetch 

The Fetch API is basically a modern replacement for XHR; it was introduced in browsers recently to make asynchronous HTTP requests easier to do in JavaScript, both for developers and other APIs that build on top of Fetch.

Store a reference to the select and pre element and store in a variable 

Defines an onchange event handler function so that when the select's value is changed, its value is passed to an invoked function updateDisplay() as a parameter.

*/

const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('p');

verseChoose.onchange = function() {
  const verse = verseChoose.value;
  updateDisplay(verse);
};


/* Step Two 

Define the update display function 

*/ 

function updateDisplay(verse) {
  verse = verse.replace(" ", "");
  verse = verse.toLowerCase();
  let url = verse + '.txt';
  /* First of all, we invoke the fetch() method, passing it the URL of the resource we want to fetch. This is the modern equivalent of request.open() in XHR, plus you don't need any equivalent to .send().*/
  fetch(url).then(function(response) {
  /* After that, you can see the .then() method chained onto the end of fetch() — this method is a part of Promises, a modern JavaScript feature for performing asynchronous operations. fetch() returns a promise, which resolves to the response sent back from the server — we use .then() to run some follow-up code after the promise resolves, which is the function we've defined inside it. This is the equivalent of the onload event handler in the XHR version. */ 
  /* This function is automatically given the response from the server as a parameter when the fetch() promise resolves. Inside the function we grab the response and run its text() method, which basically returns the response as raw text. This is the equivalent of request.responseType = 'text' in the XHR version.*/
  /* You'll see that text() also returns a promise, so we chain another .then() onto it, inside of which we define a function to receive the raw text that the text() promise resolves to.

  Inside the inner promise's function, we do much the same as we did in the XHR version — set the <pre> element's text content to the text value. */
  response.text().then(function(text) {
      poemDisplay.textContent = text;
    });
  });
}
/* show the first verse by default */
updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';

/* 6. 

Which mechanism ? 

This really depends on what project you are working on. XHR has been around for a long time now and has very good cross-browser support. Fetch and Promises, on the other hand, are a more recent addition to the web platform, although they're supported well across the browser landscape, with the exception of Internet Explorer.

If you need to support older browsers, then an XHR solution might be preferable. If however you are working on a more progressive project and aren't as worried about older browsers, then Fetch could be a good choice.

You should really learn both — Fetch will become more popular as Internet Explorer declines in usage (IE is no longer being developed, in favor of Microsoft's new Edge browser), but you might need XHR for a while yet.
*/

/* This code inspired by - 
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
*/

