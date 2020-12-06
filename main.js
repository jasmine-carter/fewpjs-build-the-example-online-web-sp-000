// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  let errorModal = document.querySelector("#modal");
  errorModal.hidden = true;

}) //end of dom content loaded listener
//when someone clicks a heart, modal appears and set ti "Recognizing events"
//when someone clicks heart, invoke mimicServerCall


function heartListener() {
  document.querySelectorAll(".like-glyph").addEventListener("click", event => {
    mimicServerCall
  })
}

function modalHandling() {
  //if randomfailure
  fetch(mimicServerCall)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object)
  })
}

function heartColorization() {
  //will control logic of if should be colored in or not
}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
