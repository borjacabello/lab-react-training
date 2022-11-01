import React from 'react'
import emptyDice from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"
import { useState } from "react"


function Dice() {
  const dicesArr = [dice1, dice2, dice3, dice4, dice5, dice6]
  const randomPosition = Math.floor(Math.random() * dicesArr.length)
  const randomDice = dicesArr[randomPosition]

  const [dice, setDice] = useState(randomDice)

  const changeDice = () => {
    setDice(emptyDice)

    setTimeout( () => {
        setDice(randomDice)
    }, 1000)
  }

  return (
    <div>
        <img onClick={changeDice} src={dice} alt={dice} style={{width: "150px"}}/>
    </div>
  )
}

export default Dice