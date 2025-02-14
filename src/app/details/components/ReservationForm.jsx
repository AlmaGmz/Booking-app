import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'react-toastify';
import { z } from 'zod'
import { api } from "../../../services/api";

const schema = z.object({
  checkIn: z.string().min(1, 'Check-In is required'),
  checkOut: z.string().min(1, 'Check-Out is required'),
})

function ReservationForm ({ hotelId}) {
  const { register, handleSubmit, formState :{ errors }, reset} = useForm ({
    resolver: zodResolver(schema)
  })

  const onSubmit =(data) => {
  data.hotelId = hotelId
   api.post('/bookings', data)
   toast.success("Reservation complete successfully")
   reset()
  }
 
  return (
    <div>
<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 justify-center items-center">
  <div className="flex justify-center gap-4">
  <div className="flex flex-col items-center">
    <label className="text-center font-semibold">
      Check-In
      <input type="date" 
      className="input font-normal focus:border-blue-700"
        
      {...register('checkIn')}
      />
    </label>
    {errors.checkIn && <p className="text-sm text-red-600">{errors.checkIn.message}</p>}
  </div>

  <div className="flex flex-col items-center">
    <label className=" text-center font-semibold">
      Check-Out
      <input type="date"
      className="input font-normal focus:border-blue-700"
      {...register('checkOut')}
      />   
    </label>
    {errors.checkOut && <p className="text-sm text-red-600">{errors.checkOut.message}</p>}
  </div>


  </div>
  
  <button className="btn bg-cyan-600 text-white mb-4">Reserve</button>

</form>


    </div>
  )
}

export default ReservationForm