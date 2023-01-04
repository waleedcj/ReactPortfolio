import StarfieldAnimation from 'react-starfield-animation'
import { useMediaQuery } from 'react-responsive'

export default function Stars() {
  const isMobile = useMediaQuery({
    query: '(max-width: 1200px)',
  })

  // const isMobile = useMedia({ maxWidth: 1200 });

  return (
    <div>
      {isMobile ? (
        <StarfieldAnimation
          style={{
            width: '100%',
            height: '100%',
            zIndex: -2,
            position: 'absolute',
            overflow: 'hidden',
          }}
        />
      ) : (
        <StarfieldAnimation
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
        />
      )}
    </div>
  )
}

// function Starss(props) {
//   const ref = useRef()
//   const [sphere] = useState(() =>
//     random.inSphere(new Float32Array(5000), { radius: 1.5 })
//   )
//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10
//     ref.current.rotation.y -= delta / 15
//   })
//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points
//         ref={ref}
//         positions={sphere}
//         stride={3}
//         frustumCulled={false}
//         {...props}
//       >
//         <PointMaterial
//           transparent
//           color="#ffa0e0"
//           size={0.005}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   )
// }
