import React, {useState} from 'react'
import Presentacion from "./Presentacion"

export default function Events({event}) {
// console.log(event.artista)

  const [eventos] = useState(event.artista)
  const {name, info, events} = eventos

  
  return (
    <div className="ArtistPresentacions">
       <h3 className="namePrinc" > {name}</h3>

          <p className="has-text-justified txtInfo">{info}</p>
      <div className="eventInfo columns">

        {  
          events.slice(0,4).map((res, i) => {
             return <Presentacion key= {i} cartelInfo = {res} Artist = {name}></Presentacion>
          })
        }
      </div>
     </div>

  )
}
