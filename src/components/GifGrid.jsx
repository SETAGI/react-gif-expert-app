import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

  const { data: gifs, loading } = useFetchGifs(category);

  return (
    <div className='grid-box'>
      <h3>{category}</h3>

      {loading && <h4>Loading...</h4>}

      <div className='card-grid'>
        {
          gifs.map((gif) => (
            <GifGridItem key={gif.id} {...gif} />
          ))
        }
      </div>
    </div>
  );
};

export default GifGrid;
