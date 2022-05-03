import React from 'react'
import './portfolio.css'
import img from '../../assets/portfolio.PNG'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Project</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={img} alt="" />
          </div>
          <h3>This is a project name <br /> Shiba Store</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/KuroNekoJ/Portfolio-me" className='btn' target='_blank'>Github</a>
            <a href="https://shiba-store.netlify.app/" className='btn btn-primary' target='_blank'>Shiba Store</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio