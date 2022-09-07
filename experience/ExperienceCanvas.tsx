import { Suspense, useRef } from 'react'

import { Canvas } from '@react-three/fiber'
import { CatmullRomCurve3, Vector3 } from 'three'
import CameraControls from './CameraControls'

const ExperienceCanvas = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        height: '100vh',
        width: '100vw',

        zIndex: 0,
      }}
    >
      <Canvas dpr={[1, 2]} linear>
        <CameraControls />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="red" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default ExperienceCanvas
