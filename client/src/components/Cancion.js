import React from 'react'

export default function Cancion({cancionInfo}) {
  const {songName, album, images, authors, albumURL, songURL} = cancionInfo
  const authorsNames = authors.map( res => {
    return res.name
  })

  return (

  <div class="galleria">
  <div class="img-box ">
      <img src={images[1].url} alt={songName} />
        <div class="transparent">
          <div class="textArt">
            
            <a className="button is-success" href={albumURL}> Descubrir el Álbum</a>
            <a className="button is-success" href={songURL}> Escuchar la Canción</a>
          </div>
        </div> 
        <p>{songName}</p>  
  </div>
</div>

  )
}
