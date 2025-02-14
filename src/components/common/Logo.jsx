import { Link } from "react-router"
import LogoSvg from "../ui/LogoSvg"

function Logo() {
  return (
    <Link to = '/'className="flex items-center gap-2">
    <LogoSvg className="size-8" colors={{
    homeBack:"fill-orange-400/30",
    homeFront: "fill-blue-500",
    check: "fill-orange-400"}}/>
    <h2 className="font-semibold text-blue-500 text-3xl">Booking <span className="text-orange-400">App</span>
    </h2>
    </Link>
  )
}

export default Logo