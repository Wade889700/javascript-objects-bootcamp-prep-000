function updatePlaylist(obj, key, value){
  obj[key] = value;
  return obj
}

function removeFromPlaylist(obj, key){
 var obj1 = Object.assign({},obj)
 delete obj1.key;
 return obj
}

var playlist = new Object({artist_names:"song titles"});