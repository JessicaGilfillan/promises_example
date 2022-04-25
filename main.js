// JavaScript Document

/* Step One 

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

/* Begin creating an XHR request
1.) create a new request object using the XMLHttpRequest() constructor
*/
let request = new XMLHttpRequest();

/* 2.) Next, you need to use the open() method to specify what HTTP request method to use to request the resource from the network, and what its URL is. We'll just use the GET method here and set the URL as our url variable

*/

request.open('GET', url);

/* 3. Next, we'll set the type of response we are expecting — which is defined by the request's responseType property — as text. This isn't strictly necessary here — XHR returns text by default — but it is a good idea to get into the habit of setting this in case you want to fetch other types of data in the future.*/

request.responseType = 'text';

/* 4 Fetching a resource from the network is an asynchronous operation, meaning that you have to wait for that operation to complete (e.g., the resource is returned from the network) before you can do anything with that response, otherwise, an error will be thrown. XHR allows you to handle this using its onload event handler — this is run when the load event fires (when the response has returned). When this has occurred, the response data will be available in the response property of the XHR request object.

Add the following below your last addition. You'll see that inside the onload event handler we are setting the textContent of the poemDisplay (the <pre> element) to the value of the request.response property.
*/ 

request.onload = function() {
  poemDisplay.textContent = request.response;
};

/* 5 The above is all set up for the XHR request — it won't actually run until we tell it to, which is done using the send() method. Add the following below your previous addition to complete the function:
*/

request.send();

}
/* show the first verse by default */
updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';

/* 6. 
Modern browsers will not run XHR requests if you just run the example from a local file. This is because of security restrictions (for more on web security, read Website security).*/

/* This code inspired by - 
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
*/


