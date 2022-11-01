import React from 'react'
import { useState } from "react"


function ClickablePicture(props) {

  const {img, imgClicked} = props;

  const [photo, setPhoto] = useState(img)

  const changePhoto = () => {
    photo === img ? setPhoto(imgClicked) : setPhoto(img)
  }

  return (
    <div>
        <img src={photo} alt={photo} onClick={changePhoto} />
    </div>
  )
}

export default ClickablePicture