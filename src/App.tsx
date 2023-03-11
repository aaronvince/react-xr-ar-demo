import * as React from 'react'
import { Interactive, XR, ARButton, Controllers } from '@react-three/xr'
import { Text } from '@react-three/drei'
import './styles.css'
import { Canvas } from '@react-three/fiber'

function Box({ color, size, scale, children, ...rest }: any) {
  return (
    <mesh scale={scale} {...rest}>
      <boxGeometry args={size} />
      {/* <meshPhongMaterial color={color} /> */}
      <meshStandardMaterial color={color} />
      {children}
    </mesh>
  )
}

function Button(props: any) {
  const [hover, setHover] = React.useState(false)
  const [color, setColor] = React.useState<any>('blue')

  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0)
  }

  return (
    <Interactive onHover={() => setHover(true)} onBlur={() => setHover(false)} onSelect={onSelect}>
      <Box color={color} scale={hover ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]} size={[0.4, 0.1, 0.1]} {...props}>
        <React.Suspense fallback={null}>
          <Text position={[0, 0, 0.06]} fontSize={0.05} color="#000" anchorX="center" anchorY="middle">
            Hello react-xr!
          </Text>
        </React.Suspense>
      </Box>
    </Interactive>
  )
}

// export function App() {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.1} />
//       <directionalLight color="red" position={[0, 0, 5]} />
//       <mesh>
//         <boxGeometry />
//         <meshStandardMaterial />
//       </mesh>
//     </Canvas>
//   )
// }

export function App() {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR referenceSpace="local">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Button position={[0, 0.1, -0.2]} />
          <Controllers />
        </XR>
      </Canvas>
    </>
  )
}
