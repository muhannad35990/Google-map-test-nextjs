"use client"
import { useState } from "react"
import locations from "../properties.json"
import GoogleMap from "./components/GoogleMap"
import { DialogInputType, LandmarkType } from "./types"
import LandmarkDialog from "./components/LandmarkDialog"
import SwipeableDrawer from "./components/SwipeableDrawer"

const center = {
  lat: locations[0].lat,
  lng: locations[0].lng
}

const MultipleMarkersMap = () => {
  const [open, setOpen] = useState<DialogInputType>({ show: false, data: null })
  return (
    <div className="h-screen relative">
      <GoogleMap
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        center={center}
        zoom={15}
        markers={locations}
        onMarkerClick={(landmark: LandmarkType) =>
          setOpen({ show: true, data: landmark })
        }
      />
      <LandmarkDialog open={open} setOpen={setOpen} />
      <SwipeableDrawer locations={locations} />
    </div>
  )
}

export default MultipleMarkersMap
