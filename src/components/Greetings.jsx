import React from 'react'

function Greetings(props) {

  const {children, lang} = props;
  
  let langStr;
  /* langStr = (lang === "de") ? "Hallo" 
  : (lang === "en") ? "Hello" 
  : (lang === "es") ? "Hola" 
  : (lang === "fr") ? "Bonjour" 
  : continue; */

  if (lang === "de") {
    langStr = "Hallo"
  } else if (lang === "en") {
    langStr = "Hello"
  } else if (lang === "es") {
    langStr = "Hola"
  } else if (lang === "fr") {
    langStr = "Bonjour"
  }

  return (
    <div>
        <h3>{langStr} {children}</h3>
    </div>
  )
}

export default Greetings