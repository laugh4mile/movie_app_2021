import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

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
  },
  {
    id: 3,
    name: 'samgyepsal',
    image: 'https://cdn.banhanu.com/images/1000000145_5.jpg',
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
