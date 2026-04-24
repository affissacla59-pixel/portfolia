import React from 'react'
function Contact() {
  return (
    <>
    <div className='cot' id='Contact'>

         <div className='separateur'>
  <span className='sep-linec'></span>
  <span className='sep-textc'>Contacts</span>
  <span className='sep-linc'></span>
</div>
<div className='container'>
    <div className='row'>
        <div className='col-md-6 cont'>
            <h1>Travaillon ensemble</h1>
            <p>Vous avez un projet ambitieux? Discutons-en</p>
            <ul>
                <li>affissacla59@gmail.com</li>
                <li>Bénin,Cotonou</li>
            </ul>

        </div>
       <div className='col-md-6'>
  <form action="" className="contact-form">

    <input placeholder='Votre nom & prénoms' type="text" name="" id="" /> <br /> 
    <input placeholder='Email' type="email" name="" id="" /> <br /> 
    <textarea placeholder='Message' name="" id="" /> <br /> 
    <button className='aff'>Envoyer</button>

  </form>
</div>

    </div>

</div>
      
    </div>
    </>
  )
}

export default Contact
