import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "Fitness Booking",
    github: "https://github.com/Stanislav-Gkraour/Laravel-Project-Final",
    demo: "https://github.com/Stanislav-Gkraour/Laravel-Project-Final"
  },
  {
    id: 2,
    image: IMG2,
    title: "Calculator",
    github: "https://github.com/Stanislav-Gkraour/Laravel-Project-Final",
    demo: "https://github.com/Stanislav-Gkraour/Laravel-Project-Final"
  },
  {
    id: 3,
    image: IMG3,
    title: "Todo List",
    github: "https://github.com/Stanislav-Gkraour/Laravel-Project-Final",
    demo: "https://github.com/Stanislav-Gkraour/Laravel-Project-Final"
  },
  {
    id: 4,
    image: IMG4,
    title: "Booking Agency Design",
    github: "https://github.com/Stanislav-Gkraour/Laravel-Project-Final",
    demo: "https://github.com/Stanislav-Gkraour/Laravel-Project-Final"
  },
  {
    id: 5,
    image: IMG5,
    title: "Restaurant Site Design",
    github: "https://github.com/Stanislav-Gkraour/Laravel-Project-Final",
    demo: "https://github.com/Stanislav-Gkraour/Laravel-Project-Final"
  },
  {
    id: 6,
    image: IMG6,
    title: "Dram Kit Keybord Interaction",
    github: "https://github.com/Stanislav-Gkraour/Laravel-Project-Final",
    demo: "https://github.com/Stanislav-Gkraour/Laravel-Project-Final"
  }
];



export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5 className="text-light">My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          portfolioData.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    className="btn "
                    href={github}
                  >
                    GitHub
                  </a>
                  <a className="btn btn-primary" href={demo}>
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  );
}
