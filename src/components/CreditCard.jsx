import React from 'react'
import visaImage from "../assets/images/visa.png"
import mastercardImage from "../assets/images/mastercard.png"

function CreditCard(props) {

  const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

  let newNumber = "";
  for (let i = 0; i < number.length; i++) {
    i < 12 ? newNumber += "*" : newNumber += number[i]
  }
  

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", backgroundColor: bgColor, color: color, width: "30%", padding: "10px"}}>
        <img src={type === "Visa" ? visaImage : mastercardImage} alt={type} style={{width: "40px"}}/>
        <p>{newNumber}</p>
        <div style={{display: "flex", flexDirection: "row", width: "30%", justifyContent: "space-around"}}>
            <p>Expires {expirationMonth}/{expirationYear.toString().slice(2)}</p>
            <p>{bank}</p>
        </div>
        <p>{owner}</p>
    </div>
  )
}

export default CreditCard