import { Link } from "react-router"
import { priceFormat } from "../../../utils"
import { GoLocation } from "react-icons/go"

function HotelCard({ hotel }) {
  return (
    <div className="border-b border-neutral-300 py-5">
      <div className="grid grid-cols-[.3fr_1fr] gap-5">
        <img className="aspect-square object-cover rounded-lg overflow-hidden mx-3" 
        src= {hotel.images[0].url}
         alt= {hotel.name} />
        <div>
      <h3 className="font-semibold">{hotel.name}</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <GoLocation />
          <p className="text-sm">
            {hotel.city.name}, {hotel.city.country}
            </p>
          </div>
          <p className="font-semibold">
          {priceFormat(hotel.price)}
          </p>
        </div>
      
      <Link
      to={`/hotel/${hotel.id}`}
       className="btn bg-blue-500 text-white block text-center w-full mt-2">
        View Details
      </Link>
      </div>
    </div>
    </div>
  )
}

export default HotelCard