import * as React from "react"
import { useState } from "react"
import { MotionConfig, motion as motionDom } from "@framer"
import { motion, MotionCanvas } from "@framer/three-entry"

/**
 * An example of firing an animation onMount using the useAnimation hook
 */

function Box(props) {
    // Hold state for hovered and clicked events
    const [clicked, click] = useState(false)

    // Subscribe this component to the render-loop, rotate the mesh every frame
    // useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <motion.mesh
            {...props}
            scale={[0, 0, 0]}
            variants={{
                visible: { scale: 1 },
                pressed: { scale: 0.8, rotateY: 1 },
                hover: { scale: 1.2 },
            }}
            onClick={(event) => click(!clicked)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <motion.meshStandardMaterial
                color="#09f"
                opacity={0}
                variants={{
                    visible: { color: "#f00", opacity: 0.5 },
                    hover: { color: "#f00", opacity: 1 },
                    pressed: { color: "#f00", opacity: 1 },
                }}
            />
        </motion.mesh>
    )
}

export const App = () => {
    const [isHovered, setHover] = useState(false)
    return (
        <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.7 }}>
            <motionDom.div
                style={{ position: "fixed", inset: 0, background: "white" }}
                onHoverStart={() => setHover(true)}
                onHoverEnd={() => setHover(false)}
            >
                <MotionCanvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <motion.group
                        animate={isHovered ? "hover" : "visible"}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                        }}
                    >
                        <Box position={[-1.5, 1.5, 0]} />
                        <Box position={[0, 1.5, 0]} />
                        <Box position={[1.5, 1.5, 0]} />
                        <Box position={[-1.5, 0, 0]} />
                        <Box position={[0, 0, 0]} />
                        <Box position={[1.5, 0, 0]} />
                        <Box position={[-1.5, -1.5, 0]} />
                        <Box position={[0, -1.5, 0]} />
                        <Box position={[1.5, -1.5, 0]} />
                    </motion.group>
                </MotionCanvas>
            </motionDom.div>
        </MotionConfig>
    )
}
