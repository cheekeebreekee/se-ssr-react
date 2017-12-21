import React from 'react';

const Home = () => {


  return (
    <div>
      <div>Welcome to the SE account</div>
      <button onClick={() => console.log('RUN!')}>Press me!</button>
    </div>
  );
};

export default {
  component: Home
};