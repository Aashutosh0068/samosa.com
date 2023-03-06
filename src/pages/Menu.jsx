import React, { useEffect } from 'react'

const Menu = () => {
  useEffect(() => {
    fetch('http/localhost:8080/samosas/')
      .then(response => response.json())
      .then(json => window.alert(json))
      .catch((err) => { window.alert(err) })
  })

  return (
    <div>Menu</div>
  )
}

export default Menu