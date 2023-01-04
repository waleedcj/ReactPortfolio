import './index.scss'
import React from 'react'
import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'
import AnimatedLetters from '../AnimatedLetters'
import Stars from '../Stars'
import alertify from 'alertifyjs'
import 'alertifyjs/build/css/alertify.css'
import { useMediaQuery } from 'react-responsive'

const Skills = () => {
  useEffect(() => {
    alertify.notify('Scroll to Zoom In & Out', '', 5)
  }, [])

  const isMobile = useMediaQuery({
    query: '(max-width: 1200px)',
  })

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const wordss = [
    'React',
    'TypeScript',
    'Git',
    'SCSS/CSS',
    'Solidity',
    ' NodeJs',
    'Python',
    'Docker',
    'npm/Yarn',
    'JavaScript',
    'PostgreSQL',
    'JSON',
  ]

  function Word({ children, ...props }) {
    const color = new THREE.Color()
    const fontProps = {
      font: '/Inter-Bold.woff',
      fontSize: 2.5,
      letterSpacing: -0.05,
      lineHeight: 1,
      'material-toneMapped': false,
    }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const over = (e) => (e.stopPropagation(), setHovered(true))
    const out = () => setHovered(false)
    // Change the mouse cursor on hover
    useEffect(() => {
      if (hovered) document.body.style.cursor = 'pointer'
      return () => (document.body.style.cursor = 'auto')
    }, [hovered])
    // Tie component to the render-loop
    useFrame(({ camera }) => {
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion)
      // Animate font color
      ref.current.material.color.lerp(color.set('#ffd700'), 0.1)
      // console.log(document.body.style.cursor)
    })
    return (
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log('clicked')}
        {...props}
        {...fontProps}
        children={children}
      />
    )
  }

  function Cloud({ count, radius }) {
    // Create a count x count random words with spherical distribution
    const words = useMemo(() => {
      const temp = []
      const spherical = new THREE.Spherical()
      const phiSpan = Math.PI / count
      const thetaSpan = (Math.PI * 6) / count
      for (let i = 1; i < count + 1; i++)
        for (let j = 0; j < count; j++)
          temp.push([
            new THREE.Vector3().setFromSpherical(
              spherical.set(radius, phiSpan * i, thetaSpan * i)
            ),
            wordss[i],
            // console.log(i),
            // console.log(j),
            // console.log(count),
          ])
      return temp
    }, [count, radius])
    return words.map(([pos, word], index) => (
      <Word key={index} position={pos} children={word} />
    ))
  }

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['Skills', ' ', '&', '', 'Experience']}
            idx={15}
          />
        </h1>
        <p style={{ fontSize: '16px' }}>
          Still a junior but I call myself a full-stack developer, at the
          momment leaning more towards front-end development including
          technologies like{' '}
          <span className="tech-tag">
            {' '}
            HTML5, CSS, SCSS, JavaScript, React, TypeScript, Bootstrap, Git
          </span>{' '}
          etc. Some of the Backend technologies I have worked with are{' '}
          <span className="tech-tag">
            Solidity, NodeJs, C#, Django, java, robotC
          </span>
        </p>
        <p align="LEFT" style={{ fontSize: '16px' }}>
          I am not a designer but I have a good sense of aesthetics, and
          experience in responsive web design. I have an ability to quickly pick
          up things and start working on stuff. Moreover, I love contributing to
          open source projects & support also after a projects completion. I
          guarantee a commitment during a project or routine work.
        </p>
        <p style={{ fontSize: '16px' }}>
          Vist my Linkedln{' '}
          <a
            className="tech-tag2"
            href="https://www.linkedin.com/in/waleed-zulfiqar-ali-886579181/"
            target="_blank"
            rel="noopener noreferrer"
          >
            profile
          </a>{' '}
          for more details, or you could also checkout my resume right{' '}
          <a
            className="tech-tag2"
            href="/walidResume1page.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </div>

      {/* */}

      {isMobile ? (
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 35], fov: 90 }}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            overflow: 'hidden',
          }}
        >
          <fog attach="fog" args={['#202025', 0, 90]} />
          <Cloud count={14} radius={20} />
          <TrackballControls />
        </Canvas>
      ) : (
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 35], fov: 90 }}
          style={{
            width: '50%',
            height: '100%',
            top: '0%',
            paddingTop: '0%',
            marginLeft: 0,
            position: 'absolute',
            right: 0,
            overflow: 'hidden',
          }}
        >
          <fog attach="fog" args={['#202025', 0, 90]} />
          <Cloud count={14} radius={20} />
          <TrackballControls />
        </Canvas>
      )}

      <Stars />
      {}
    </div>
  )
}

export default Skills
