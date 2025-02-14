import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import { toast } from "react-toastify"
import { useAuth } from "../../../hooks/useAuth"



const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

function LoginForm() {
  const { login } = useAuth()
  const { register, handleSubmit, formState :{ errors }} = useForm ({
    resolver: zodResolver(schema)
  })

  const navigate = useNavigate()

  const onSubmit =(data) => {
   login(data)
   toast.success("Login successfully")
   navigate('/')
  }
 
  return (
    <div>
<form onSubmit={handleSubmit(onSubmit)}>
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
  <button className="btn bg-cyan-600 text-white mb-4">Sign in</button>

</form>


    </div>
  )
}

export default LoginForm