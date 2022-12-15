import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';

export const SWMovies = () => {
  const options = ['1','2','3','4','5','6','7'];
  const baseUrl = 'https://swapi.dev/api/films';

  const [number, setNumber] = useState( options[0] );
  const [movie, setMovie] = useState( {title: ''} );

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`${baseUrl}/${number}`);
      console.log(res);
      setMovie(res.data);
    }
    getData();
  }, [number])

  return <div>
    <h1>Pick a Movie</h1>
    <h4>{movie?.title}</h4>
    <select name="" id="" onChange={(evt: ChangeEvent<HTMLSelectElement>) => setNumber(evt.currentTarget.value)}>
      {options.map(option => <option value={option}>{option}</option>)}
    </select>
    <p>You chose {number}</p>
  </div>
}
