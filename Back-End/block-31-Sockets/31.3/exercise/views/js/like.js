/* eslint-disable no-undef */
const socket = io('http://localhost:3001');

const likeButton = document.querySelector('#likeIcon');

likeButton.addEventListener('click', () => {
  const likeCounter = document.querySelector('#currentLikes');
  likeCounter.innerText = parseInt(likeCounter.innerText, 10) + 1;
  socket.emit('likePost', likeCounter.innerText);
  console.log(likeCounter.innerText);
  return false;
});

const likeLoader = (likeCounter) => {
  const likeContainer = document.querySelector('#currentLikes');
  // console.log(likeCounter);
  likeContainer.innerText = likeCounter;
};

socket.on('loadingLikes', likeLoader);
