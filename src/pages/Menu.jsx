import React, { useEffect } from 'react'

const Menu = () => {
  useEffect(() => {
    fetch('/samosas/')
      .then(response => response)
      .catch((err) => { window.alert(err) })
  })

  return (
    <div>Menu</div>
  )
}

export default Menu