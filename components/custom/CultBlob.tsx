"use client"

import { motion, useReducedMotion } from "motion/react"
import React, { createContext, useContext, useEffect, useState } from "react"

// import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    DynamicIsland,
    DynamicIslandProvider,
    SizePresets,
    useDynamicIslandSize
} from "@/components/ui/dynamic-island"

import Image from "next/image"
import { renderCompactState, renderLargeState, renderLongState, renderMediumState, renderTallState } from "./CultBlobRenders"

const DynamicAction = () => {
    const { state: blobState, setSize } = useDynamicIslandSize()
    const [started, setStarted] = useState(false)
    const [animationReady, setAnimationReady] = useState(false)


    // I need to control this dynamic action with a button
    // perhaps the button conditionally renders the DynamicAction itself

    function startAnimationSequence() {
        const steps = [
            { size: "compact", delay: 600 },
            { size: "large", delay: 1600 },
            { size: "tall", delay: 2600 },
            { size: "long", delay: 3600 },
            { size: "medium", delay: 4600 },
        ]

        // const steps: any[] = []

        steps.forEach(({ size, delay }) => {
            setTimeout(() => {
                setSize(size as SizePresets)
            }, delay)
        })
    }

    // Start Animation Sequence when animationReady is true
    useEffect(() => {
        if (animationReady) {
            startAnimationSequence()
        }
    }, [animationReady])


    // Wait for the blobState to be set before starting the animation
    useEffect(() => {
        if (started) {
            const timeout = setTimeout(() => setAnimationReady(true), 100)
            return () => clearTimeout(timeout)
        }
    }, [started])


    // This is the default state when no specific size is set and also the first quick render
    const renderOtherStates = () => (
        <div className="flex ml-4">
            <Image
                src="/squib_face_sticker_clean.png"
                alt="vapor"
                width={50}
                height={50}
                className="rounded-full" />
            <p className="text-white self-center mb-2 ml-2">Hi</p>
        </div>
    )

    // Main render logic based on size
    function renderState() {
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
            // Optionally add cases for other states as necessary
            default:
                return renderOtherStates()
        }
    }

    // ============================================================================= //

    type StartButtonProps = {
        setStarted: React.Dispatch<React.SetStateAction<boolean>>;
        started: boolean;
    };

    const StartButton = ({ setStarted, started }: StartButtonProps) => {
        if (!started)
            return (
                <Button onClick={() => setStarted(true)} disabled={started}>
                    Start Animation
                </Button>
            );
    };

    return (
        <div className=" h-full max-w-[90vw] ">
            <div className="flex flex-col gap-4  h-full">
                <div className="absolute top-12 left-1 ">
                    {/* {!blobState.isAnimating ? ( */}
                    {/* isANimating default button. shows logic for auto cycling if setStarted(true) */}
                    {/* <Button
            onClick={cycleBlobStates}
            disabled={blobState.isAnimating}
            className="mt-4 p-2 border rounded-md max-w-[200px] "
          >
            Click
            <MousePointerClickIcon className="ml-2 h-4 w-4" />
          </Button> */}
                    {/* ) : null} */}
                </div>
                <div className="absolute top-1 right-2 ">
                    <div>
                        {/* Badge was originally here */}
                        {/* <p>{blobState.previousSize}</p>
          <p>{blobState.size}</p> */}
                    </div>
                </div>

                <StartButton setStarted={setStarted} started={started} />
                {/* {started ? <DynamicIsland id="dynamic-blob">{started ? renderState() : null}</DynamicIsland> : null} */}
                {started && (
                    <DynamicIsland id="dynamic-blob" >
                        {renderState()}
                    </DynamicIsland>
                )}
            </div>
        </div>
    )
}

// ============================================================================ //




// This is the main CultBlob component that wraps the DynamicAction
// It provides the DynamicIslandProvider context and renders the DynamicAction component
export function CultBlob() {
    return (
        <DynamicIslandProvider initialSize={"default"}>
            <div>
                <DynamicAction />
            </div>
        </DynamicIslandProvider>
    )
}

const FadeInStaggerContext = createContext(false)

const viewport = { once: true, margin: "0px 0px -200px" }

export function FadeIn(props: any) {
    let shouldReduceMotion = useReducedMotion()
    let isInStaggerGroup = useContext(FadeInStaggerContext)

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

export function FadeInStagger({ faster = false, ...props }) {
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
