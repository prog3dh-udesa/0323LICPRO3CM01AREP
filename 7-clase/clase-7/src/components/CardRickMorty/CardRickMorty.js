import React from 'react'
import { Link } from 'react-router-dom'

export default function CardRickMorty(props) {
  return (
    <Link to={`/unpersonaje/id/${props.info.id}`}>
        <div>
            <img src={props.info.image}/>
            <h1>{props.info.name}</h1>
        </div>
    </Link>
  )
}

