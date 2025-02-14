import { Link } from "react-router";
import { FaRegCalendarDays, FaDollarSign } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { LuBedDouble } from "react-icons/lu";
import { priceFormat } from "../../../utils";



function ReservationCard({ 
  id,
  checkIn,
  checkOut,
  hotelId,
  hotelName, 
  hotelPrice, 
  city,
  country,
  onDelete,
  onCreateReview
}) {
  const checkInDay = new Date(checkIn)
  const checkOutDay = new Date(checkOut)
  const msPerDay = 24 * 60 * 60 * 1000
  const days = Math.round ((checkOutDay - checkInDay) / msPerDay)

  return (
   <div className="bg-blue-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 mx-1">
      {/**Cabecera*/}
      <h2 className="bg-cyan-600 text-center text-white text-lg font-semibold p-4">
        <Link to={`/hotel/${hotelId}`}> 
        {hotelName}
        </Link>
        
      </h2>
      {/**Cuerpo*/}
      <div className="flex flex-col gap-4 p-6">
      {/**Details*/}
        <div className="flex items-center justify-between">
          {/**Llegada */}
          <div className="flex items-start gap-2">
          <FaRegCalendarDays className="size-7" />
            <span className="font-semibold">
            Check-In:
           <span className="block font-normal text-xs">{checkIn}</span>
            </span>
            </div>
           {/**Salida */}
             <div className="flex items-start gap-2">
             <FaRegCalendarDays className="size-7" />
            <span className="font-semibold">
            Check-Out:
            <span className="block font-normal text-xs">{checkOut}</span>
            </span>
            </div>
            </div>
          {/**Location */}
           <div className="flex items-center gap-1">
           <GoLocation className="size-7" />
        <p>{city}, {country}</p>
        </div>
          {/**Nigths */}
        <div className="flex items-center gap-1">
        <LuBedDouble className="size-7"/>
          <p>{days} nights</p>
        </div>
        {/**Price */}
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-1">
        <FaDollarSign className="size-7"/>
        <p>Price per nigth</p>
        </div>
        <p className="font-semibold">{priceFormat(hotelPrice)}</p> 
        </div>
        {/**Total */}
        <div className="flex items-center justify-between border-t pt-4 
        border-neutral-300">
        <div className="flex items-center gap-1">
        <FaDollarSign className="size-7"/>
        <p className="font-semibold">Total</p>
        </div>
        <p className="text-xl font-semibold">{priceFormat(hotelPrice * days)} </p>
        {/**Buttons */}
        </div>
              
        <div className="flex justify-between bg-blue-50 py-4 px-6 ">
          <button className="btn bg-orange-400 text-white hover:bg-orange-500"
          onClick={() => onDelete(id)}>
            
            Delete</button>
          <button className="btn bg-cyan-600 text-white hover:bg-cyan-700"
          onClick={() => onCreateReview(hotelId)}>
          Rate
          </button>
        </div>
    </div>
    </div>
  )
}

export default ReservationCard