import React from 'react';
import { useState } from 'react';

function LikeButton() {
  const colorsArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [color, setColor] = useState('purple');

  const changeColor = () => {
    let randomPosition = Math.floor(Math.random() * colorsArr.length);
    let randomColor = colorsArr[randomPosition];
    setColor(randomColor)
  };

  const [counter, setCounter] = useState(0);
  const incrementCount = () => {
    setCounter(counter + 1);
  };

  const changeThings = () => {
    changeColor()
    incrementCount()
  }

  return (
    <div style={{ backgroundColor: color }}>
      <button onClick={changeThings}>{counter} Likes</button>
    </div>
  );
}

export default LikeButton;
