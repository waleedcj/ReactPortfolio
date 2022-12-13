import './index.scss'
import React from 'react'
import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Stars from '../Stars'

const Skills = () => {
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
  // useEffect(() => {
  //   return () => {
  //     const container = '.tagcloud'
  //     const texts = [
  //       '3D',
  //       'TagCloud',
  //       'JavaScript',
  //       'CSS3',
  //       'Animation',
  //       'Interactive',
  //       'Mouse',
  //       'Rolling',
  //       'Sphere',
  //       '6KB',
  //       'v2.x',
  //     ]
  //     const options = {
  //       // radius in px
  //       radius: 400,

  //       // animation speed
  //       // slow, normal, fast
  //       maxSpeed: 'fast',
  //       initSpeed: 'fast',

  //       // 0 = top
  //       // 90 = left
  //       // 135 = right-bottom
  //       direction: 135,

  //       // interact with cursor move on mouse out
  //       keep: true,
  //     }

  //     TagCloud(container, texts, options)
  //   }
  // }, [])

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
          I'm a very ambitious front-end developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p align="LEFT" style={{ fontSize: '16px' }}>
          I'm quiet confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p style={{ fontSize: '16px' }}>
          If I need to define myself in one sentence that would be a family
          person, father of a beautiful daughter, a sports fanatic, photography
          enthusiast, and tech-obsessed!!!
        </p>
      </div>

      {/* */}

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
      <Stars />
    </div>
  )
}

export default Skills
