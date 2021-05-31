const music = {
  title: "Bob is Great",
  artist: "Bob",
  album: "Bob's number 1 album",
};

const displayMessage = () => {
  if (Math.random() > 0.5) {
    return "10";
  } else {
    return "5";
  }
};

const songSnippet = `${displayMessage()} Playing ${music.title} by artist ${
  music.artist
} from the album ${music.album}`;

console.log(songSnippet);
