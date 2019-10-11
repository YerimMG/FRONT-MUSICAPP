
import React, {useState, useEffect, Fragment} from 'react'
import { Redirect } from 'react-router-dom'

import axios from 'axios'


//Componentes 
import ConcertsByArtists from './concertsByArtists'
import Artista from './Artista'
import Cancion from './Cancion'

export default function SuccesRoute({userInfo, token}) {
  //All the user Artists
  const [ userArtists, setUserArtist] = useState([])
  //All the user Tracks
  const [ userTracks, setUsertraks  ] = useState([])



      // EJECUTAR APIS
      useEffect( () => {
          if (userArtists === undefined || userTracks === undefined){
            window.location.reload()
          }

     //Consultar api's
     const urlArtists = async () =>{
      try {
       const res = await axios.get(`https://shielded-crag-67706.herokuapp.com/info/${token}/Artists`);
       const allInfo = await res.data[0].items;
       const arr = allInfo.map(res =>{
         return {name: res.name, images: res.images}

       }); 
       setUserArtist(arr)
      } catch (error) {
        return <Redirect to='/login'/>;

      }
     
   }

   const getUserTracks = async () => {
     try {
       const tracks = await axios.get(`https://shielded-crag-67706.herokuapp.com/info/${token}/tracks`);
       const getInfo = await tracks.data.items;
       const array = getInfo.map(res =>{
       const authors = res.artists.map(res => {
           return res
         })
         return {songName: res.name, 
                 album: res.album.name, 
                 images: res.album.images, 
                 albumURL: res.album.external_urls.spotify, 
                 songURL: res.external_urls.spotify,
                 authors: authors
                }
       });       
       setUsertraks(array)
     } catch (error) {
       return 
     }

   }

            urlArtists()
            getUserTracks()
            
        }, [  ])
        
    return (
      <Fragment>
     
     <div className='componentePrincipal'>

       <div className='favMusics'>
          <h2>Tus músicos favoritos son: </h2>

            <div className="ListCards">
              {userArtists.slice(0,12).map((resp, i) => 
                <Artista className='columns' key ={i} artista={resp}></Artista>
              )}
            </div>
      </div>
      
        <h2>Tus Canciones Favoritas! </h2>
 
            <div className="songListCards">
           
              {userTracks.slice(0,12).map((resp, i) => 
                 <Cancion key={i} cancionInfo = {resp}/>
              )}
            </div>
      </div>
      <div className="hola">
        <h2>Tal vez Estas Presentaciones te Interesan!</h2>
      </div>
           <div className="ArtistPresentacions">
            <ConcertsByArtists 
            token= {token}/>
           </div>

  
      </Fragment>
    )
}
  