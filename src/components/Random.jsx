import React from 'react'

function Random(props) {

  const {min, max} = props;

  let randomValue = Math.round(min + (Math.random() * (max - min)))

  return (
    <div>
        <p>Random value between {min} and {max}: {randomValue}</p>
    </div>
  )
}

export default Random