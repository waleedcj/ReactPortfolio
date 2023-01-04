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
            I'm a very young ambitious Full Stack developer looking for a role
            in an established IT company with the opportunity to work with the
            latest technologies on challenging and diverse projects.
          </p>
          <p align="LEFT" style={{ fontSize: '16px' }}>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p style={{ fontSize: '16px' }}>
            If I need to define myself in one sentence that would be a funny
            person, a sports fanatic, gamming and building enthusiast, learner
            and tech-obsessed!!!
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
