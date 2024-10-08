import { FC, ReactElement } from "react"
import { LandmarkType } from "../types"
import { Heart, X } from "lucide-react"
import Image from "next/image"
const LandmarkCard: FC<LandmarkType> = ({
  name,
  dates,
  price_per_night,
  rating,
  reviews_count,
  image
}): ReactElement => {
  return (
    <div className="mw-sm pb-16 px-4">
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={400}
          height={250}
          className="object-contain rounded-xl"
        />
        <button className="border-none outline-none bg-white rounded-3xl px-1.5 absolute top-3 right-3 font-medium">
          مفضل لدى الضيوف
        </button>
        <div className="flex items-center absolute top-3 left-3 gap-2">
          <button className="border-none outline-none bg-white rounded-full p-2">
            <X size={16} />
          </button>
          <button className="border-none outline-none bg-white rounded-full p-2">
            <Heart size={16} />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-1">
        <h1>
          {reviews_count && `(${reviews_count})`} {rating}
          <span className="ms-1">★</span>
        </h1>
        <h1 className="font-semibold">{name}</h1>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">{dates}</p>
        <p className="font-semibold">
          ${price_per_night}
          <span className="ms-1">الليلة</span>
        </p>
      </div>
    </div>
  )
}

export default LandmarkCard
