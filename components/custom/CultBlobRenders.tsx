"use client"

import { Mail, User, Waves } from "lucide-react"
import Image from "next/image"
import { TypingAnimation } from "../magicui/typing-animation"
import { Button } from "../ui/button"
import { DynamicContainer, DynamicDescription, DynamicDiv, DynamicTitle } from "../ui/dynamic-island"
import ConfettiOnMount from "./ConfettiOnMount"
import RetroSpinner from "./RetroSpinner"


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

const renderCompactState = () => (
    <DynamicContainer className="flex items-center justify-center h-full w-full">
        <div className="relative w-full flex items-center">
            <ConfettiOnMount />
            <DynamicDescription className="absolute left-4  my-auto text-lg font-medium tracking-tighter text-white ">
                <Image alt="alt-img" src={"/favicon.ico"} width={35} height={35} className="border-rounded" />
            </DynamicDescription>

            <DynamicDescription className="absolute text-white right-4  my-auto text-lg font-bold tracking-tighter ">
                wesgrant.dev
            </DynamicDescription>
        </div>

    </DynamicContainer>
)

// Great for call to action, popping up in users face :)
const renderLargeState = () => (
    <DynamicContainer className="flex items-center justify-center h-full w-full">
        <div className="relative  flex w-full items-center justify-between gap-6 px-4">
            {/* <Loader className="animate-spin h-12 w-12  text-yellow-300" /> */}
            <RetroSpinner size={32} color="#00FFCC" />
            <DynamicTitle className="my-auto text-2xl font-black tracking-tighter text-white ">
                <TypingAnimation delay={50} >loading</TypingAnimation>
            </DynamicTitle>
        </div>
    </DynamicContainer>
)

// Great for user onboarding, forms, etc
const renderTallState = () => (
    <DynamicContainer className="  flex flex-col mt-6 w-full items-start  gap-1 px-8 font-semibold">
        <DynamicDescription className="bg-cyan-300 rounded-2xl tracking-tight leading-5  p-2">
            The Cult of Pythagoras
        </DynamicDescription>
        <DynamicDescription className="bg-cyan-300 rounded-2xl tracking-tight leading-5  p-2 text-left">
            Music of the Spheres, an idea that celestial bodies produce a form of
            music through their movements
        </DynamicDescription>

        <DynamicTitle className=" text-4xl font-black tracking-tighter text-cyan-100 ">
            any cool cults?
        </DynamicTitle>
    </DynamicContainer>
)

const renderLongState = () => (
    <DynamicContainer className="flex items-center justify-center h-full w-full">
        <DynamicDiv className="relative  flex w-full items-center justify-between gap-6 px-4">
            <div>
                <Waves className=" text-cyan-400 h-8 w-8" />
            </div>

            <DynamicTitle className="my-auto text-xl font-black tracking-tighter text-white ">
                Supercalifragilisticexpialid
            </DynamicTitle>
        </DynamicDiv>
    </DynamicContainer>
)

const renderMediumState = () => (
    <DynamicContainer className="flex flex-col justify-between px-2 pt-4 text-left text-white h-full h-fit">
        <DynamicTitle className="text-2xl pl-3 font-black tracking-tighter">
            Reincarnation, welcome back
        </DynamicTitle>
        <DynamicDescription className="leading- text-neutral-500 pl-3">
            Good for small tasks or call outs
        </DynamicDescription>

        <DynamicDiv className="flex flex-col mt-auto space-y-1 mb-2 bg-neutral-700 p-2 rounded-b-2xl scale-95">
            <Button>
                <Mail className="mr-2 h-4 w-4 fill-cyan-400 text-neutral-900" /> Login
                with email
            </Button>

            <Button className="mt-1 ">
                <User className="mr-2 h-4 w-4 fill-cyan-400 text-cyan-400" /> Join the
                cult now
            </Button>
        </DynamicDiv>
    </DynamicContainer>
)

export { renderOtherStates, renderCompactState, renderLargeState, renderLongState, renderMediumState, renderTallState }
