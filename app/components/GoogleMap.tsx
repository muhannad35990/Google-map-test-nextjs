import { Status, Wrapper } from "@googlemaps/react-wrapper"

import Marker from "./CustomMarker"
import { GoogleMapProps, LandmarkType } from "../types"
import Map from "./Map/Map"

const render = (status: Status) => {
  if (status === Status.FAILURE) {
    return <p>failed</p>
  }
  return <p>loading...</p>
}

export default function GoogleMap({
  apiKey,
  onClick,
  onIdle,
  zoom,
  center,
  markers,
  onMarkerClick
}: GoogleMapProps) {
  return (
    <div className="flex h-full">
      <Wrapper apiKey={apiKey} render={render}>
        <Map
          className="grow h-full"
          center={center}
          zoom={zoom}
          minZoom={2}
          maxZoom={18}
          onIdle={onIdle}
          onClick={onClick}
          fullscreenControl={false}
          streetViewControl={false}
          mapTypeControl={false}
          zoomControl={false}
          clickableIcons={false}
        >
          {markers?.map((marker: LandmarkType, index: number) => (
            <Marker
              key={index}
              landmark={marker}
              onClick={() => onMarkerClick(marker)}
            />
          ))}
        </Map>
      </Wrapper>
    </div>
  )
}
