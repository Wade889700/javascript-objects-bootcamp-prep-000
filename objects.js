function updatePlaylist(playlist, name_of_artist, title_of_song){
  return Object.assign({},playlist, {[name_of_artist]:title_of_song})
}

function removeFromPlaylist(playlist, name_of_artist){
 delete playlist.name_of_artist;
 return playlist
}

var playlist = new Object({artist_names:"song titles"});