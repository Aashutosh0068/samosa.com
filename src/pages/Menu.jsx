import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Menu = () => {
 
  const [data, setData] = useState([])

  useEffect(() => {
    const res = axios.get('/samosas/')
    const detax = JSON.parse(JSON.stringify(res))
    setData(detax)
    console.log(detax)
  },[data])

  return (
    <div>Menu</div>
  )
}

export default Menu