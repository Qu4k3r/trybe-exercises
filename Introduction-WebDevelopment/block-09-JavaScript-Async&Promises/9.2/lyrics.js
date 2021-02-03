function findLyrics(artist, song) {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
}

const inputArtist = document.querySelector('#artist-input');
const inputLyrics = document.querySelector('#lyrics-input');
const myButton = document.querySelector('#submit-button');
const spanLyrics = document.querySelector('#lyrics-span');

myButton.addEventListener('click', async () => {

  try {
    const promiseReturn = await findLyrics(inputArtist.value, inputLyrics.value); // Retorna um objeto em binario
    const promiseJson = await promiseReturn.json(); // Retorna um objeto manipulável em JSON
    const resultLyric = await promiseJson.lyrics; // Retorna o valor correspondente a chave lyrics
    if (resultLyric) {
      spanLyrics.innerText = resultLyric;
    }
    else {
      throw new Error(' Sorry, I couldn\'t find this song! :( ');
    }
  }

  catch(e) {
    window.alert(e);
  }

  // findLyrics(inputArtist.value, inputLyrics.value)
  //   .then(content => content.json())
  //   .then(result => {
  //     if (result.lyrics) return result.lyrics;
  //     throw new Error(errorMsg)
  //   })
  //   .then(lyrics => spanLyrics.innerText = lyrics)
  //   .catch((error) => window.alert('Sorry, I couldn\'t find this lyric ! :( '));
});
