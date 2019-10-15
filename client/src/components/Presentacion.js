import React, {useEffect, useState} from 'react'

export default function Presentacion({cartelInfo, Artist}) {
  // console.log(cartelInfo.lugar)
const {name, url } = cartelInfo
const { min, max } = cartelInfo.precios
const {day, hour} = cartelInfo.date
const { rescinto, state } = cartelInfo.lugar



  return (  



<div className=" cartel has-text-light">
    
<h1 className="titulo is-4 has-text-info">{name}</h1> 
        <p className=" is-6 has-text-link ancore">@{Artist}</p>
        <p className='describcion'>Precios: entre ${min} y ${max}.  {rescinto}, {state}. {day}, {hour} </p>
        <a className="button is-link " href={url}>Buscar Boletos</a>
</div>
  )
}
//HOLA!!