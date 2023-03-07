import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Menu = () => {
 
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/samosas/')
    .catch(err => window.alert(err))
  },[data])

  return (
    <div>Meu</div>
  )
}

export default Menu