import { Suspense, } from 'react'
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, } from "@react-three/drei"

function Animate() {
    return (

        <Canvas>
            <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 200]} scale={2.4}>
                    <MeshDistortMaterial
                        color="#2ea3f2"
                        attach="material"
                        distort={0.5}
                        speed={2}
                    />
                </Sphere>
            </Suspense>
        </Canvas>

    )
}

export default Animate



