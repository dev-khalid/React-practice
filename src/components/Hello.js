import React from 'react'

const Hello = ({data}) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.welcome(data.name)}</p>
    </div>
  )
}

export default Hello
