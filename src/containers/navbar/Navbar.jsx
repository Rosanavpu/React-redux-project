import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVideogameBySearch } from '../../store/actions';
import { RenderPage } from '../../components/navbar/NavbarComponent';

export default function SearchAppBar() {
  const [value, setValue] = useState('');
  const { videoGames } = useSelector(s => s.videogamesReducers);
  const dispatch = useDispatch();
  const handleChange = e => {
    setValue(e.target.value);
    let search = videoGames.filter(elem => elem.name === e.target.value);
    if (search.length > 0) {
      return dispatch(fetchVideogameBySearch(search));
    }
  };
  const handleBlur = () => {
    setValue('');
    dispatch(fetchVideogameBySearch(''));
  };
  return (
    <RenderPage /> && (
      <RenderPage handleBlur={handleBlur} handleChange={handleChange} value={value} />
    )
  );
}
