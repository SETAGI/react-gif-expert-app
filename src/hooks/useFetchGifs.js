import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

  const [state, setstate] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getGifs(category).then(response => {
      setTimeout(() => {
        setstate({
          data: response,
          loading: false
        });
      }, 3000);
    });
  }, [category]);

  return state;

};