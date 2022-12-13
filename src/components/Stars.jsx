import { useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = () => {
  function Stars(props) {
    const ref = useRef()
    const [sphere] = useState(() =>
      random.inSphere(new Float32Array(5000), { radius: 1.5 })
    )
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    })
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points
          ref={ref}
          positions={sphere}
          stride={3}
          frustumCulled={false}
          {...props}
        >
          <PointMaterial
            transparent
            color="#f2f0f1"
            size={0.005}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    )
  }
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{
        width: '50%',
        height: '100%',
        top: '0%',
        paddingTop: '0%',
        marginLeft: 0,
        position: 'absolute',
        right: 0,
        overflow: 'hidden',
        zIndex: -2,
      }}
    >
      <Stars />
    </Canvas>
  )
}

export default Stars
