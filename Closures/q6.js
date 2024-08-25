// Task 1: Create a function createPlaylist that takes a playlist name as a parameter and returns a closure.
function createPlaylist(playlistName) {
    const songs = [];
  
    return {
      addSong: (songName, artist) => {
        songs.push({ songName, artist });
      },
      listSongs: () => {
        console.log(`Songs in ${playlistName}:`);
        songs.forEach((song, index) => {
          console.log(`${index + 1}. ${song.songName} by ${song.artist}`);
        });
      }
    };
  }
  
  // Task 2: Create a function addSong that takes a song name and artist as parameters and adds the song to the specified playlist.
   const addSong = (playlist, songName, artist) => playlist.addSong(songName, artist);
  
  // Task 3: Create a function listSongs that lists all the songs in a specified playlist.
   const listSongs = (playlist) => playlist.listSongs();
  
  // Usage example:
  const myPlaylist = createPlaylist("My Favorites");
  
  myPlaylist.addSong("Happy", "Pharrell Williams");
  myPlaylist.addSong("Uptown Funk", "Mark Ronson ft. Bruno Mars");
  
  myPlaylist.listSongs();
  
  // Output:
  // Songs in My Favorites:
  // 1. Happy by Pharrell Williams
  // 2. Uptown Funk by Mark Ronson ft. Bruno Mars