import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'
import StarfieldAnimation from 'react-starfield-animation'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const styleObj = {
    fontSize: 60,
  }

  const nameArray = ['a', 'l', 'i', 'd', '', 'M', 'e', 'm', 'o', 'n']
  const jobArray = [
    'd',
    'a',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <StarfieldAnimation
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            overflow: 'hidden',
            zIndex: -2,
          }}
        />
        <div className="text-zone">
          <h1 style={styleObj}>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              style={{ width: 50, height: 50 }}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full Stack Developer / React Native / Blockend </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
