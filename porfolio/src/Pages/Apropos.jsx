import React from 'react'

function Apropos() {
     const bar=[
        {label:"HTML", pct:90},
        {label:"JavaScript", pct:80},
        {label:"React", pct:75}
        
    ]
  return (
    <>
    <div className='apsection' id='about'>
        <div className='separateur'>
  <span className='sep-line'></span>
  <span className='sep-text'>À PROPOS</span>
  <span className='sep-lin'></span>
</div>
        <div className='container-fluide apcontent2'>
            <div className='row'>
               
                
                <div className='col-md-6 apcontent'>
                    <h2>Affis SACLA</h2>
                     <p>Développeur passionné basé à Cotonou, je transforme des idées en
            expériences numériques d'exception. Mon approche allie rigueur
            technique et sens esthétique pour créer des produits qui marquent
            </p>
                    
                </div>
                <div className='col-md-6'>
                        {bar.map((s) => (
                            <div key={s.label} className='bar-row'>
                                <div className='bar-header'>
                                    <span className='bar-label'>{s.label}</span>
                                    <span className='bar-pct'>{s.pct}%</span>
                                </div>
                                <div className='bar-bar-bg'>
    <div
        className='bar-bar-fill'
        style={{ width: `${s.pct}%` }}
    ></div>
</div>
                            </div>
                        ))}
                    </div>
                

                
            </div>
        </div>
    </div>

    
      
    </>
  )
}

export default Apropos
