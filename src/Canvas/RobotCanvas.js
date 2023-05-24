import React, { 
    Suspense,
    useEffect,
    useState,
   } from 'react';
  import { Canvas } from '@react-three/fiber';
  import {
      ContactShadows,
      Float,
    OrbitControls,
    Preload,
    useGLTF
  } from "@react-three/drei";
  import CanvasLoader from "./Loader";
  
  function Robot({ isMobile }) {
    const robot = useGLTF('./roboter_cute/scene.gltf')
  
    return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <Float
            speed={5}
            rotationIntensity={1.5}
            floatIntensity={2}
        >
            <primitive
            object={robot.scene}
            scale={isMobile ? 1.7 : 2}
            position={isMobile ? [0, -1.7, 0] : [0, -1.7, 0]}
            />
        </Float>
      </mesh>
    )
  }
  
  function RobotCanvas() {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      // Add a listener for changes to the screen size
      const mediaQuery = window.matchMedia("(max-width: 1195px)");
  
      // Set the initial value of the `isMobile` state variable
      setIsMobile(mediaQuery.matches);
  
      // Define a callback function to handle changes to the media query
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
  
      // Add the callback function as a listener for changes to the media query
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      // Remove the listener when the component is unmounted
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);
  
    return (
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            maxAzimuthAngle={0}
            minAzimuthAngle={0}
          />
          <Robot isMobile={isMobile}/>
        </Suspense>
        <ContactShadows position={[0, -3.5, 0]} opacity={2} scale={20} blur={3} far={4.55} />
        <Preload all/>
      </Canvas>
    )
  }
  
  export default RobotCanvas