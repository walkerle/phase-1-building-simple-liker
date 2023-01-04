// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const anyLike = document.querySelectorAll('.like-glyph');
// console.log('anyLike:', anyLike)

anyLike.forEach(element => {
  element.addEventListener('click', likeClicked);
})

function likeClicked(e) {
  // console.log('Like was clicked');
  // debugger
  mimicServerCall("huh")
  .then(() => {
    e.target.innerHTML = (e.target.innerHTML === EMPTY_HEART ? FULL_HEART : EMPTY_HEART);
    mimicServerCall()
    .then(() => {})
    .catch(() => {})
  })
  .catch(function(error) {
    const msg = document.querySelector('#modal');
    msg.className = "";
    msg.innerText = error;
    setTimeout(() => msg.className = "hidden", 3000);
  })
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
