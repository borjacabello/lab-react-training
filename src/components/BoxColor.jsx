import React from 'react'

function BoxColor(props) {

  const {r, g, b} = props;

  const cardStyles = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  }

  let rHex = r.toString(16)
  let gHex = g.toString(16)
  let bHex = b.toString(16)

  let hexNum = rHex + gHex + bHex

  return (
    <div style={cardStyles}>
      <p>rgb({r}, {g}, {b})</p>
      <p>#{hexNum}</p>
    </div>
  )
}

export default BoxColor