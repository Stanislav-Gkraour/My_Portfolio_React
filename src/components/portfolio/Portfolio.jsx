import React from 'react'
import './Portfolio.css'


export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5 className="text-light">My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/Stanislav-Gkraour/Laravel-Project-Final">Fitness</a>
        </article>
      </div>
    </section>
  );
}
