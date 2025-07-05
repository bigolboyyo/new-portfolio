"use client"

import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react"
import { motion, useReducedMotion } from "motion/react"
import { Button } from "@/components/ui/button"
import {
    DynamicIsland,
    DynamicIslandProvider,
    SizePresets,
    useDynamicIslandSize,
} from "@/components/ui/dynamic-island"
import {
    renderCompactState,
    renderLargeState,
    renderLongState,
    renderMediumState,
    renderOtherStates,
    renderTallState,
} from "./CultBlobRenders"

// -----------------------------
// Start Button Component
// -----------------------------
type StartButtonProps = {
    started: boolean
    onStart: () => void
}

const StartButton = ({ started, onStart }: StartButtonProps) => {
    if (started) return null
    return (
        <Button onClick={onStart} disabled={started}>
            Start Animation
        </Button>
    )
}

// -----------------------------
// Main Dynamic Action
// -----------------------------
const DynamicAction = () => {
    const { state: blobState, setSize } = useDynamicIslandSize()
    const [started, setStarted] = useState(false)
    const [animationReady, setAnimationReady] = useState(false)

    const startAnimationSequence = useCallback(() => {
        const steps: { size: SizePresets; delay: number }[] = [
            { size: "compact", delay: 600 },
            { size: "large", delay: 1600 },
            { size: "tall", delay: 2600 },
            { size: "long", delay: 3800 },
            { size: "medium", delay: 4800 },
        ]

        steps.forEach(({ size, delay }) => {
            setTimeout(() => setSize(size), delay)
        })
    }, [setSize])

    useEffect(() => {
        if (animationReady) {
            startAnimationSequence()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animationReady])

    useEffect(() => {
        if (started) {
            const timeout = setTimeout(() => setAnimationReady(true), 100)
            return () => clearTimeout(timeout)
        }
    }, [started])

    const renderState = () => {
        switch (blobState.size) {
            case "compact":
                return renderCompactState()
            case "large":
                return renderLargeState()
            case "tall":
                return renderTallState()
            case "medium":
                return renderMediumState()
            case "long":
                return renderLongState()
            default:
                return renderOtherStates()
        }
    }

    return (
        <div className="h-full max-w-[90vw]">
            <StartButton started={started} onStart={() => setStarted(true)} />
            <div className="flex flex-col gap-4 h-full">
                {started && (
                    <DynamicIsland id="dynamic-blob">{renderState()}</DynamicIsland>
                )}
            </div>
        </div>
    )
}

// -----------------------------
// CultBlob Wrapper
// -----------------------------
export function CultBlob() {
    return (
        <DynamicIslandProvider initialSize="default">
            <DynamicAction />
        </DynamicIslandProvider>
    )
}

// -----------------------------
// FadeIn Animation Utility
// -----------------------------
const FadeInStaggerContext = createContext(false)
const viewport = { once: true, margin: "0px 0px -200px" }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FadeIn(props: any) {
    const shouldReduceMotion = useReducedMotion()
    const isInStaggerGroup = useContext(FadeInStaggerContext)

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            {...(isInStaggerGroup
                ? {}
                : {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport,
                })}
            {...props}
        />
    )
}

export function FadeInStagger({
    faster = false,
    ...props
}: {
    faster?: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
}) {
    return (
        <FadeInStaggerContext.Provider value={true}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
                {...props}
            />
        </FadeInStaggerContext.Provider>
    )
}
