import React from 'react'
import NavBar from './NavBar'
import { albumsData } from '../Assets/assets'
import Albumitems from './Albumitems'
import { songsData } from '../Assets/assets'
import Songitem from './Songitem'


const DisplayHome = () => {
  return (
    <>
      <NavBar/>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto '>
        {albumsData.map((item,index)=>(<Albumitems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
      </div>

      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto '>
          {songsData.map((item,index)=>(<Songitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
