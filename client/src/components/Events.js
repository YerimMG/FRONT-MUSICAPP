import React, {useState, useEffect, Fragment} from 'react'
import Presentacion from "./Presentacion"

export default function Events({event}) {
// console.log(event.artista)

  const [eventos] = useState(event.artista)
  const [image, setImg] = useState('')
  const {name, info, events} = eventos


useEffect(() => {
    events.forEach(response=> {
      const img = response.images
      img.forEach( e => {
        if ( e.width > 900 && e.height > 900 ) {
          setImg(e.url)
        } else {
          return
        }
      })
    })
}, [])



  return (
   <Fragment>

      <div className="maiContainer">
       <h3 className="namePrinc" > {name}</h3>
       <p className="has-text-justified txtInfo">{info}</p>

      <div className="infoConcert">
        <img src={image} alt=""/>
      <div className="prensentacion">
        {  
          events.slice(0,3).map((res, i) => {
             return <Presentacion key= {i} cartelInfo = {res} Artist = {name}></Presentacion>
          })
        }
      </div>
      </div>
 

      </div>

    

      
          




    </Fragment>
  )
}
