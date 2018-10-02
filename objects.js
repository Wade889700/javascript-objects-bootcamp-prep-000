function updatePlaylist(obj, key, value){
  obj[key] = value
  return obj
}

function removeFromPlaylist(playlist, name_of_artist){
 delete playlist.name_of_artist;
 return playlist
}

var playlist = new Object({artist_names:"song titles"});