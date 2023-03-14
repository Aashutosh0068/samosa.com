import Banner from '@/components/Banner'
import Context from '@/components/context'
import { getValue } from '@/values/setValues'
import React, { useEffect } from 'react'

const Homepage = () => {

  return (
    <div>
        <Banner/>
        <Context/>
    </div>
  )
}

export default Homepage