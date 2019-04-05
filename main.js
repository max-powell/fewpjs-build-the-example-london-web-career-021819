// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const ERROR_BAR = document.querySelector('#modal')
const ERROR_MESSAGE = ERROR_BAR.querySelector('p')

const hearts = {
  '♡': '♥',
  '♥': '♡'
}

document.addEventListener('click', function(e) {
  if (e.target.className.includes('like-glyph')) {
    mimicServerCall()
      .then(() => toggleHearts(e.target))
      .catch(function(message) {
        showError(message)
        setTimeout(() => hideError(), 5000);
      })
  }
})

function toggleHearts (heart) {
  heart.innerText = hearts[heart.innerText]
  heart.classList.toggle('activated-heart')
}

function showError (message) {
  ERROR_MESSAGE.innerText = message
  ERROR_BAR.className = ''
}

function hideError () {
  ERROR_BAR.className = 'hidden'
  ERROR_MESSAGE.innerText = ''
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
