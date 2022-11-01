import React from 'react';

function IdCard(props) {

  const {lastName, firstName, gender, height, birth, picture} = props

  return (
    <div>
        <img src={picture} alt="personal-photo" />

        <div>
            <p><span>First name:</span> {lastName}</p>
            <p><span>Last name:</span> {firstName}</p>
            <p><span>Gender:</span> {gender}</p>
            <p><span>Height:</span> {height}</p>
            <p><span>Birth:</span> {birth.toString()}</p>
        </div>
    </div>
  )
}

export default IdCard;
