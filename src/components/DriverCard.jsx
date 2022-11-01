import React from 'react'

function DriverCard(props) {

  const {name, rating, img, car} = props;

  let stars = (rating >= 0 && rating < 0.5) ? <p>☆☆☆☆☆</p>
  : (rating >= 0.5 && rating < 1.5) ? <p>★☆☆☆☆</p>
  : (rating >= 1.5 && rating < 2.5) ? <p>★★☆☆☆</p>
  : (rating >= 2.5 && rating < 3.5) ? <p>★★★☆☆</p>
  : (rating >= 3.5 && rating < 4.5) ? <p>★★★★☆</p>
  : (rating >= 4.5 && rating <= 5) ? <p>★★★★★</p>
  : <p></p>;

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
        <img src={img} alt={name} style={{width: "40px", height: "40px", margin: "auto 0"}}/>
        <div>
            <h5>{name}</h5>
            {stars}
            <p>{car.model} - {car.licensePlate}</p>
        </div>
    </div>
  )
}

export default DriverCard