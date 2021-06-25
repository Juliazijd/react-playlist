import React, { useState } from 'react';

import './SongForm.css';

function SongForm({ addSong }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const song = {
      title: title,
      artist: artist,
      genre: genre,
      rating: rating,
      id: Math.floor(Math.random() * 100),
    };
    addSong(song);
  };

  return (
      <form
        className='song-form'
        onSubmit={event => {
          handleSubmit(event);
        }}
      >
        <input
          id='title'
          type='text'
          name='title'
          placeholder='Title'
          onChange={event => setTitle(event.target.value)}
          value={title}
        />
        <input
          id='artist'
          type='text'
          name='artist'
          placeholder='Artist'
          onChange={event => setArtist(event.target.value)}
          value={artist}
        />
        <input
          id='genre'
          type='text'
          name='genre'
          placeholder='Genre'
          onChange={event => setGenre(event.target.value)}
          value={genre}
        />
        <select
          id='rating'
          name='rating'
          onChange={event => setRating(event.target.value)}
          value={rating}
        >
          <option>select rating</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <button
          onClick={handleSubmit}
          type='submit'
          value='add song'
        >
          Add song
        </button>
      </form>
  );
}

export default SongForm;
