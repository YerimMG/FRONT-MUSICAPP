import React from 'react'

export default function Artista({artista}) {

  const {name} = artista
  const imagen = artista.images[1].url
  // // http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=YOUR_API_KEY&format=json


  // const apiKey = '2afb14099c8f55cf1431ec6977dc7550'
  return (

<div className="galleria">
  <div className="img-box ">
      <img src={imagen} alt={name} />
        <div className="transparent">
          <div className="textArt">
            <p>{name}</p>  
           
          </div>
        </div> 
  </div>
</div>

  )
} 

