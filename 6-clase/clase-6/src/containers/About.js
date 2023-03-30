import React from 'react'

export default function About(props) {

  console.log(props)
  return (
    <div>
      <h1>{props.match.params.id}</h1>
    </div>
  )
}
