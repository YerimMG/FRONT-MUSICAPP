import React, {useEffect, useState} from 'react'

export default function Presentacion({cartelInfo, Artist}) {
  // console.log(cartelInfo.lugar)
const [imagen, setImg] = useState('')
const {name, url } = cartelInfo
const { min, max } = cartelInfo.precios
const {day, hour} = cartelInfo.date
const { rescinto, state } = cartelInfo.lugar
const imagenes = cartelInfo.images
      useEffect( e => {
        imagenes.map(respuesta => {
     
          if ( respuesta.width > 900 && respuesta.height > 700){
            setImg(respuesta.url)
          }else{
            return
          }
        }) 
  }, [])


  return (  
<div className="card cartel has-text-light">
  <div className="card-image">
    <figure className="image is-128x128px">
      <img src={imagen} alt={name}/>
    </figure>
  </div>

  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4 has-text-warning">{name}</p>
        <p className="subtitle is-6 has-text-link">@{Artist}</p>
      </div>
    </div>

    <div className="content is-1">
      <p className='describcion'>Precios: entre ${min} y ${max}. <br/> {rescinto}, {state} </p>
      
      <a className="button is-link " href={url}>Buscar Boletos</a>
      <br />
      <time className="has-text-light date "> Fecha:{day}, {hour} </time>
    </div>
  </div>
</div>
  )
}
