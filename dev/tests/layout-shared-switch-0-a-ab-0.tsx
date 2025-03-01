import { motion } from "@framer"
import * as React from "react"

const transition = {
    default: { duration: 0.2, ease: () => 0.5 },
}

export const App = () => {
    const params = new URLSearchParams(window.location.search)
    const type = params.get("type") || true
    const [count, setCount] = React.useState(0)

    return (
        <div
            id="trigger"
            style={overlay as any}
            onClick={() => setCount(count + 1)}
        >
            {(count === 1 || count === 3) && (
                <motion.div
                    id="a"
                    layoutId="box"
                    layout={type}
                    style={a}
                    transition={transition}
                />
            )}
            {count === 2 && (
                <motion.div
                    id="b"
                    layoutId="box"
                    style={b}
                    transition={transition}
                />
            )}
        </div>
    )
}

const overlay = {
    position: "fixed",
    inset: 0,
}

const box = {
    position: "absolute",
    top: 0,
    left: 0,
    background: "red",
}

const a = {
    ...box,
    width: 100,
    height: 200,
}

const b = {
    ...box,
    top: 100,
    left: 200,
    width: 300,
    height: 300,
}
