import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faEthereum,
  faNodeJs,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Stars from '../Stars'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p style={{ fontSize: '16px' }}>
            Hey there! I'm a full-stack developer who loves to dive headfirst
            into exciting projects. But beyond the code, there's more to me. I'm
            that person who's always up for a good laugh, can't resist a sports
            match, and might just challenge you to a video game duel.
          </p>
          <p align="LEFT" style={{ fontSize: '16px' }}>
            If I had to sum myself up in a few words? Think of me as your techy
            buddy who's always game for a new challenge, loves to learn, and is
            a bit obsessed with building cool stuff.
          </p>
          <p style={{ fontSize: '16px' }}>
            Ready to team up and create something awesome? Let's chat!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faEthereum} color="#3c3c3d" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#4584b6" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faNodeJs} color="#3c873a" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
        <Stars />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
