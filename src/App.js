import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styled from "styled-components";
import { Model } from './M4.js';
import './App.css';

function App() {
  return (
    <Wrapper className="Wrapper">
      <Canvas style={{ background: '#171717' }}>
          <OrbitControls />
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-2,5,2]} intensity={1} />
          <Suspense fallback={null}>
            <Model/>
          </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
postions: relative;
background: #333;
canvas {
  width: 100vw;
  height: 100vh;
}
`
export default App;
