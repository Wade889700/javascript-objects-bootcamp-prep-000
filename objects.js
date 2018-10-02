function updatePlaylist(playlist, name_of_artist, title_of_song){
  playlist.name_of_artist='title_of_song';
  return playlist
}

function removeFromPlaylist(playlist, name_of_artist){
 delete playlist.name_of_artist;
 return playlist
}

var playlist = new Object({artist_names:"song titles"});