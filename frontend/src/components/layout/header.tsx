"use client"
import React, { Dispatch, SetStateAction, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Menus } from "@/data"

export const Header = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md border-white/20 border-2 fixed top-0 left-1/2 transform -translate-x-1/2 w-auto flex items-center justify-center z-50 mt-2 rounded-full">
      <SlideTabs />
    </div>
  )
}

const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  })

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }))
      }}
      className="relative mx-auto flex w-fit rounded-full  p-1"
    >
      {Menus.map((menu, i) => (
        <Tab key={i} setPosition={setPosition} url={menu.uri}>
          {menu.Icon}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  )
}

const Tab = ({
  children,
  setPosition,
  url,
}: {
  children: string
  setPosition: Dispatch<SetStateAction<Position>>
  url: string
}) => {
  const ref = useRef<null | HTMLLIElement>(null)

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return

        const { width } = ref.current.getBoundingClientRect()

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        })
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs  text-white  md:px-5 md:py-2 md:text-sm"
    >
      <a href={url}>{children}</a>
    </li>
  )
}

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-5 rounded-full bg-gradient-to-r text-lg text-black font-bold from-[#d8e0e2] to-[#12a2e0] md:h-9"
    />
  )
}

type Position = {
  left: number
  width: number 
  opacity: number
}