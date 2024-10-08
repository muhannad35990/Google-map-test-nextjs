"use client"
import { FC, ReactElement, useState } from "react"
import { useSwipeable } from "react-swipeable"
import { motion } from "framer-motion"
import { LandmarkType, SwipeableDrawerProps } from "../types"
import LandmarkCard from "./LandmarkCard"

const SwipeableDrawer: FC<SwipeableDrawerProps> = ({
  locations
}): ReactElement => {
  const [open, setOpen] = useState(false)
  const [fullHeight, setFullHeight] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
    if (!open) setFullHeight(false)
  }

  const handlers = useSwipeable({
    onSwipedUp: toggleDrawer,
    onSwipedDown: toggleDrawer
  })

  return (
    <motion.div
      {...handlers}
      className={`fixed bottom-0 left-0 w-full text-black bg-white transition-transform duration-300 min-h-8 rounded-lg max-h-screen ${
        open ? "translate-y-0" : "translate-y-[calc(100%-50px)]"
      } ${fullHeight ? "h-screen" : "h-auto"}`}
      onClick={toggleDrawer}
    >
      <div className="p-4 w-full max-h-screen overflow-y-auto">
        <h2 className="text-lg font-bold w-full text-end">
          أكثر من 1000 مسكن على المنطقة المحددة في الخريطة
        </h2>
        <div className="flex flex-col items-end mt-5">
          {open &&
            locations?.map((loc: LandmarkType, index: number) => (
              <LandmarkCard key={index} {...loc} />
            ))}
        </div>
      </div>
    </motion.div>
  )
}

export default SwipeableDrawer
