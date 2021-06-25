import React, { useState } from 'react';
import SongForm from './SongForm';
import SongList from './SongList';

function SongOverview() {
  const [songs, setSongs] = useState([]);
  const addSong = song => {
    const newSongList = [...songs, song];
    setSongs(newSongList);
  };

function deleteSong(id) {
  const newSongList = songs.filter(song => song.id !== id);
  setSongs(newSongList);
  }

  return (
    <div>
      <SongForm addSong={addSong} />
      <SongList songs={songs} deleteSong={deleteSong} />
    </div>
  );
}
export default SongOverview;
