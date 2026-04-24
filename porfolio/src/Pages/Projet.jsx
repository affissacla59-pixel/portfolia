import React, { useEffect, useRef } from 'react'
import Porf from '../assets/Porf.png'
import Porf1 from '../assets/Porf1.png'

const projects = [
  {
    img: Porf,
    title: 'Portfolio AS',
    description: 'Site personnel en React avec identité luxe dorée, animations fluides et design sur-mesure.',
    tags: ['React', 'CSS'],
    link: 'https://porfolia-red.vercel.app',
  },
  {
    img: Porf1,
    title: 'Portfolio AS',
    description: 'Site vitrine en HTML avec identité luxe dorée, animations fluides et design sur-mesure.',
    tags: ['HTML', 'CSS'],
    link: 'https://hakaton-corriger.vercel.app',
  },
 
]

function Projet() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    cardsRef.current.forEach((card) => card && observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="sectionp" id='services'>
      {/* Séparateur titre */}
      <div className="separateurp">
        <span className="sep-linep"></span>
        <span className="sep-text">Mes Projets</span>
        <span className="sep-linep"></span>
      </div>

      {/* Grille projets */}
      <div className="projets-grid">
        {projects.map((projet, i) => (
          <article
            key={i}
            className="projet-card"
            ref={(el) => (cardsRef.current[i] = el)}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {/* Image */}
            <div className="projet-img-wrapper">
              <img src={projet.img} alt={projet.title} className="projet-img" />
              <div className="projet-overlay">
                <a href={projet.link} className="projet-voir-btn">
                  Voir le projet
                </a>
              </div>
              <span className="projet-numero">0{i + 1}</span>
            </div>

            {/* Contenu */}
            <div className="projet-content">
              <h3 className="projet-title">{projet.title}</h3>
              <p className="projet-desc">{projet.description}</p>
              <div className="projet-tags">
                {projet.tags.map((tag, j) => (
                  <span key={j} className="projet-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Ligne décorative */}
            <div className="projet-line"></div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projet