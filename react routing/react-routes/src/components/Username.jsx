import React from 'react'
import { useParams } from 'react-router-dom'
const Username = () => {
    const param = useParams()
  return (
    <div>
      i am user {param.username}
    </div>
  )
}

export default Username
