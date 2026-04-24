import React from 'react'
import Image2 from '../assets/Image2.png'
import '../App.css'

function Home() {
  
  return (
    <>
    <div className='separator'></div>
    <section className='hero' id='home'>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <p className='hero-sub'>Bonjour, je suis </p>
            <h1 className='hero-title'>Affis SACLA</h1>
            <h2 className='hero-role'>Développeur Web & Mobile</h2>
           <p className='hero-desc'>
             Passionné par la création d'applications modernes, je conçois des 
             expériences digitales élégantes et performantes pour le web et mobile.
            </p>
            <div className='hero-buttons'>
            <button className='btn-gold'>Voir mes projets</button>
            <button className='btn-outline'>Me contacter</button>

            </div>
          </div>
          <div className='col-md-6'>
            <img src={Image2} alt="" className='hero-img'/>
          </div>
        </div>
      </div>
    </section>
     
    </>
  )
}

export default Home;