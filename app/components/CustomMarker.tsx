import { FC, ReactElement, useCallback, useMemo } from "react"
import { CustomMarkerProps } from "../types"
import OverlayView from "./OverlayView"

const CustomMarker: FC<CustomMarkerProps> = ({
  landmark,
  map,
  onClick
}): ReactElement => {
  const price = useMemo(() => {
    return `$ ${landmark.price_per_night}`
  }, [landmark])

  const handleClick = useCallback(() => {
    onClick(landmark)
  }, [onClick, landmark])

  return (
    <>
      {map && (
        <OverlayView
          position={{
            lat: landmark.lat as number,
            lng: landmark.lng as number
          }}
          map={map}
        >
          <button
            onClick={handleClick}
            className="bg-white text-black rounded-lg p-1 font-semibold"
          >
            {price}
          </button>
        </OverlayView>
      )}
    </>
  )
}

export default CustomMarker
