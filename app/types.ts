import { PropsWithChildren } from "react"

export type LandmarkType = {
  name: string
  location: string
  beds?: string
  dates: string
  price_per_night?: number
  rating: number | string
  reviews_count?: number
  lat: number
  lng: number
  image: string
}
export interface CustomMarkerProps {
  landmark: LandmarkType
  map?: google.maps.Map
  onClick: (payload: LandmarkType) => void
}
export type OverlayProps = PropsWithChildren<{
  position: google.maps.LatLng | google.maps.LatLngLiteral
  pane?: keyof google.maps.MapPanes
  map: google.maps.Map
  zIndex?: number
}>

export interface GoogleMapProps {
  onIdle?: (map: google.maps.Map) => void
  onClick?: (e: google.maps.MapMouseEvent) => void
  onMarkerClick: (payload: LandmarkType) => void
  markers?: LandmarkType[]
  center: google.maps.LatLngLiteral
  zoom: number
  apiKey: string
  highlightedMarkerId?: string
}
export type DialogInputType = {
  show: boolean
  data: LandmarkType | null
}
export interface LandmarkDialogProps {
  open: DialogInputType
  setOpen: (v: DialogInputType) => void
}
export interface SwipeableDrawerProps {
  locations: LandmarkType[]
}
