function updatePlaylist(obj, key, value){
  playlist[key]=value;
  return playlist
}

function removeFromPlaylist(playlist, name_of_artist){
 delete playlist.name_of_artist;
 return playlist
}

var playlist = new Object({artist_names:"song titles"});