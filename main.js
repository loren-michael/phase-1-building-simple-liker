// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const heart = document.querySelector(".like-glyph");
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");
const heartElements = [...document.getElementsByClassName("like-glyph")];


// My code below


let catchError = (e) => {
  mimicServerCall()
  .then (() => handleResponse(e))
  .catch (error => handleError(error))
  }

let heartEvents = heartElements.map(heartNode => {
  return heartNode.addEventListener('click', catchError);
})

let handleError = (errorMessage) => {
  modal.classList.remove("hidden");
  modalMessage.innerText = errorMessage;
  setTimeout(() => {
    modal.classList.add("hidden")
    modalMessage.innerText = "";
  }, 3000);
}

let handleResponse = (event) => {
  if (event.target.textContent === EMPTY_HEART) {
    event.target.classList.add("activated-heart");
    event.target.textContent = FULL_HEART
  } else {
    event.target.classList.remove('activated-heart');
    event.target.textContent = EMPTY_HEART;
  }
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
