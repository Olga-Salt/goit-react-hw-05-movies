import React from 'react';
import PropTypes from 'prop-types';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './Pages.module.css';
import { noPoster } from '../helpers/fallback';
const imgUrl = 'https://image.tmdb.org/t/p/w300';

const handleDragStart = e => e.preventDefault();

export default function MovieCastPage({ movie }) {
  const items = movie.credits.cast.map(cast => (
    <div key={cast.cast_id} className={styles.carouselItem}>
      <img
        src={cast.profile_path ? ` ${imgUrl}${cast.profile_path}` : noPoster}
        alt={cast.name}
        onDragStart={handleDragStart}
        className={styles.carouselItem__img}
      />
      <p className={styles.carouselItem__txt}>{cast.original_name}</p>
      <p>{cast.character}</p>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  return (
    <AliceCarousel
      autoPlay
      responsive={responsive}
      infinite
      disableButtonsControls
      disableDotsControls
      mouseTracking
      items={items}
    />
  );
}

MovieCastPage.propTypes = {
  movie: PropTypes.object.isRequired,
};
