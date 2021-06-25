import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import './SongList.css';

const SongList = (props) => {

// function sortAlphabatically(event) {
//     props.songs.slice().sort((a, b) => a.title.localeCompare(b.title));
// }
  return (
    <div className='songlist'>
      <table>
        <tr>
          <th className='title'>Title</th>
          <th className='artist'>Artist</th>
          <th className='genre'>Genre</th>
          <th className='rating'>Rating</th>
        </tr>
        {props.songs.map((song, index) => {
          return (
            <tr className='songlist-header' 
                key={index} 
                value={song.id}
            >
              <td className='song-row__item'>{song.title}</td>
              <td className='song-row__item'>{song.artist}</td>
              <td className='song-row__item'>{song.genre}</td>
              <td className='song-row__item'>{song.rating}</td>
              <span className='delete-button' onClick={() => props.deleteSong(song.id)}><AiOutlineClose /></span>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default SongList;
