import Loading from '@/components/Loading'
import userState from '@/values/userState'
import React, { useEffect, useState } from 'react'

const userprofile = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userStatus = userState().message
    if (userStatus !== 200) {
      window.location.replace('/auth/login')
    }
    else {
      setLoading(null)
    }
  }, [loading, userState().email])

  return (
    <>
      {
        loading ? (
          <div>
            <Loading />
          </div>) : (
          <div>userprofile welcome {userState().email}</div>
        )
      }
    </>
  )
}

export default userprofile