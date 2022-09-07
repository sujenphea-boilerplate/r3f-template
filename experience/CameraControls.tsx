import { extend, ReactThreeFiber, useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

extend({ OrbitControls })

// https://github.com/pmndrs/react-three-fiber/issues/130
declare global {
  export namespace JSX {
    export interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >
    }
  }
}

function CameraControls() {
  const { camera, gl } = useThree()
  const controls = useRef<OrbitControls | null>(null)

  useFrame(() => {
    controls.current?.update()
  })

  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableZoom
      enableDamping
      dampingFactor={0.1}
      rotateSpeed={0.5}
      zoomSpeed={0.2}
      enableRotate
      maxPolarAngle={Math.PI * 0.75}
      minPolarAngle={Math.PI * 0.25}
      autoRotate
      autoRotateSpeed={-0.5}
      maxZoom={200}
      minZoom={1}
    />
  )
}

// default prop values
CameraControls.defaultProps = {
  zoomIn: false,
}

export default CameraControls
