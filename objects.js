function updatePlaylist(playlist, name_of_artist, title_of_song){
  return playlist[name_of_artist]=title_of_song}
}

function removeFromPlaylist(playlist, name_of_artist){
 delete playlist.name_of_artist;
 return playlist[name_of_artist]=title_of_song}
}

var playlist = new Object({artist_names:"song titles"});