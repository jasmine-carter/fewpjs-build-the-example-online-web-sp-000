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

function addHeartListener() {
  document.querySelectorAll(".like-glyph").forEach(item => {
    addEventListener("click", event => {
    mimicServerCall("url")
  })
}

function modalHandling() { //if server returns error, show modal
  mimicServerCall("url")
  .then(function(response){
    console.log(response);
    heartColorization();
  })
  .catch(function(error) {
    alert(`${error}`);
    document.querySelector("#modal-message").textContent = `${error}`;
    document.querySelector("#modal").hidden = false;
    hideModal()
  })
}

function hideModal() {
  setTimeout(function(){document.querySelector("#modal").hidden = true}, 5000);
}
function heartColorization() {
  //will control logic of if should be colored in or not
  let heart = document.querySelector(".like-glyph")
  heart.className = "activated-heart"
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
