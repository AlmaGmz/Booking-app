import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import { useAuth } from "../../../hooks/useAuth"
import { useNavigate } from "react-router"

const schema = z.object({
  firstName: z.string().nonempty(),
  lastName:z.string().nonempty(),
  email: z.string().email(),
  password: z.string().min(6),
  gender: z.enum(['male', 'female', 'other'], { message: 'Please select a valid gender'})
})

function RegisterForm() {
  const { register, handleSubmit, formState :{ errors }} = useForm ({
    resolver: zodResolver(schema)
  })
  
  const navigate = useNavigate()
  const { register: createUser } =useAuth()

  const onSubmit =(data) => {
    createUser(data)
    navigate('/login')
  }
 
  return (
    <div>
<form onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-4">
    <label className="font-semibold">
      FirstName:
      <input 
       className= "input focus:border-blue-700"
        
      {...register('firstName')}
      />
    </label>
    {errors.firstName && <p className="text-sm text-red-600">{errors.firstName.message}</p>}
  </div>

  <div className="mb-4">
    <label className="font-semibold">
      LastName:
      <input 
       className= "input focus:border-blue-700"
        
      {...register('lastName')}
      />
    </label>
    {errors.lastName && <p className="text-sm text-red-600">{errors.lastName.message}</p>}
  </div>


  <div className="mb-4">
    <label className="font-semibold">
      Email:
      <input type="email" className= "input focus:border-blue-700"
        
      {...register('email')}
      />
    </label>
    {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
  </div>

  
  <div className="mb-4">
    <label className="font-semibold">
      Password:
      <input type="password" className="input focus:border-blue-700"
      {...register('password')}
      />   
    </label>
    {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
  </div>
   <div className="mb-4">
    <label >
      <span className="font-semibold">Gender:</span>      
      <select
      className="input focus:border-blue-700"
      {...register('gender')}
      >
      <option value="">Select a gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select> 
    </label>
    
    {errors.gender && <p className="text-sm text-red-600">{errors.gender.message}</p>}
  </div>
  <button className="btn bg-cyan-600 text-white mb-4">Register</button>


</form>


    </div>
  )
}

export default RegisterForm
