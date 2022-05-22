import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useLocation } from "react-router-dom";

function Scene({ canvasRef, setText, setCanvasHovered, location, ...props }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [canvasCenter, setCanvasCenter] = useState({ x: 0, y: 0 });
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/mascot.gltf");
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    group.current.rotation.x = (mousePos.y - canvasCenter.y) * 0.0005;
    group.current.rotation.y = (mousePos.x - canvasCenter.x) * 0.0005;
  });

  useEffect(() => {
    actions["Cat.001Action"]?.play();
    document.onmousemove = function (event) {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    // calculate center of canvas
    const canvas = canvasRef.current;
    let rect = canvas.getBoundingClientRect();
    setCanvasCenter({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    if (location === "/" && canvasRef.current !== null) {
      document.onscroll = function () {
        if (canvasRef.current !== null) {
          rect = canvasRef.current.getBoundingClientRect();
          setCanvasCenter({
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
          });
        }
      };
    }
    return () => {
      document.onmousemove = null;
      document.onscroll = null;
    };
  }, [actions, canvasRef, location]);

  return (
    <group
      onPointerOver={() => setCanvasHovered(true)}
      onPointerOut={() => {
        setCanvasHovered(false);
        setText("Hello! I am Luna!");
      }}
      onClick={() => setText("I'm the Mascot of GDSC-DMCE!")}
      ref={group}
      {...props}
      dispose={null}
    >
      <group position={[0, -1.5, 0]}>
        <group>
          <group position={[0, 2.08, 0]}>
            <mesh
              geometry={nodes.Cylinder007.geometry}
              material={nodes.Cylinder007.material}
            />
            <mesh
              geometry={nodes.Cylinder007_1.geometry}
              material={nodes.Cylinder007_1.material}
            />
          </group>
          <group
            position={[1, 2.17, -0.09]}
            rotation={[0, 0, -1.13]}
            scale={[0.24, 0.16, 0.24]}
          >
            <mesh
              geometry={nodes.Circle002_1.geometry}
              material={nodes.Circle002_1.material}
            />
            <mesh
              geometry={nodes.Circle002_2.geometry}
              material={nodes.Circle002_2.material}
            />
            <mesh
              geometry={nodes.Circle002_3.geometry}
              material={nodes.Circle002_3.material}
            />
            <mesh
              geometry={nodes.Circle002_4.geometry}
              material={nodes.Circle002_4.material}
            />
            <mesh
              geometry={nodes.Circle002_5.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group
            position={[-1, 2.17, -0.1]}
            rotation={[Math.PI, 0, 2.01]}
            scale={[0.24, 0.16, 0.24]}
          >
            <mesh
              geometry={nodes.Circle003_1.geometry}
              material={nodes.Circle003_1.material}
            />
            <mesh
              geometry={nodes.Circle003_2.geometry}
              material={nodes.Circle003_2.material}
            />
            <mesh
              geometry={nodes.Circle003_3.geometry}
              material={nodes.Circle003_3.material}
            />
            <mesh
              geometry={nodes.Circle003_4.geometry}
              material={nodes.Circle003_4.material}
            />
          </group>
          <mesh
            name="Cat001"
            geometry={nodes.Cat001.geometry}
            material={nodes.Cat001.material}
            position={[-0.44, 1.28, 0]}
            rotation={[0, 0, -0.32]}
          />
          <mesh
            geometry={nodes["SubTool-4-8114216"].geometry}
            material={nodes["SubTool-4-8114216"].material}
            position={[0, 1.94, 0.74]}
            rotation={[1.46, 0, 0]}
            scale={0.77}
          />
          <mesh
            geometry={nodes.Cat002.geometry}
            material={nodes.Cat002.material}
            position={[0.57, 1.23, 0]}
            rotation={[0, 0, -0.86]}
            scale={[0.75, 1, 1]}
          />
          <mesh
            geometry={nodes.Cylinder.geometry}
            material={materials.gdsc}
            position={[0, 1.23, 0.7]}
            rotation={[1.18, Math.PI / 2, 0]}
            scale={[0.08, 0.01, 0.09]}
          />
          <mesh
            geometry={nodes.Attacher.geometry}
            material={nodes.Attacher.material}
            position={[0, 1.52, 0.54]}
            rotation={[-0.41, 0, 0]}
            scale={[0.52, 0.1, 0.69]}
          />
          <mesh
            geometry={nodes["SubTool-5-12870732"].geometry}
            material={nodes["SubTool-5-12870732"].material}
            position={[0, 2.32, 0.62]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.77}
          />
          <mesh
            geometry={nodes.Attachment_2.geometry}
            material={nodes.Attachment_2.material}
            position={[0, 1.4, 0.61]}
            rotation={[-0.41, 0, 0]}
            scale={[0.2, 0.08, 0.16]}
          />
          <mesh
            geometry={nodes.Glasses.geometry}
            material={materials.oculos}
            position={[0, 2.27, 0.28]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Cat"
            geometry={nodes.Cat.geometry}
            material={nodes.Cat.material}
            position={[0, 2.08, 0]}
          />
          <mesh
            geometry={nodes.Neck_Tie.geometry}
            material={nodes.Neck_Tie.material}
            position={[0, 1.53, -0.01]}
            scale={[0.6, 0.07, 0.6]}
          />
          <mesh
            geometry={nodes.Cylinder001.geometry}
            material={nodes.Cylinder001.material}
            position={[0, 2.46, -0.1]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1.11, 0.09, 1.11]}
          />
        </group>
        <group />
      </group>
    </group>
  );
}

const Mascot = ({ location }) => {
  const canvasRef = useRef();
  const [canvasHovered, setCanvasHovered] = useState(false);
  const [text, setText] = useState("Hello! I am Luna!");

  return (
    <>
      {canvasHovered && (
        <div
          className="absolute animate-fadeUp text-xl text-accent text-center -top-10 flex justify-center"
          style={{ width: canvasRef.current?.clientWidth || 300 }}
        >
          <span
            className={`rounded-lg p-2 z-50 backdrop-filter backdrop-blur-xl ${
              text.startsWith("Hello") ? "text-accent" : "text-highlight"
            }`}
          >
            {text}
          </span>
        </div>
      )}
      <Canvas
        ref={canvasRef}
        shadows
        style={{ height: "100%" }}
        camera={{ position: [0, 0, 10] }}
      >
        <directionalLight
          intensity={1.3}
          position={[200, 400, 400]}
          color={"#C097DE"}
        />
        <directionalLight
          intensity={0.7}
          position={[-100, -200, 200]}
          color={"#C097DE"}
        />
        {/* <directionalLight intensity={0.01} position={[-100, -200, 200]} /> */}
        <Suspense fallback={"Loading"}>
          <Scene
            setCanvasHovered={setCanvasHovered}
            setText={setText}
            canvasRef={canvasRef}
            scale={3.3}
            location={location}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Mascot;
