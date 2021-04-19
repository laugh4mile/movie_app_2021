import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.sexyTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.string,
};

const foodILike = [
  {
    id: 1,
    name: 'kimch',
    image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png',
  },
  {
    id: 2,
    name: 'ramen',
    image:
      'https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg',
    rating: 4.3,
  },
  {
    id: 3,
    name: 'samgyepsal',
    image: 'https://cdn.banhanu.com/images/1000000145_5.jpg',
    rating: 4.8,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
