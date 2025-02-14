import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { cn } from "../../../utils";


function StartRating({ setRating, rating }) {

  const [hover, setHover] = useState(0)

  return (
    <div className="mb-2">
      {[...Array(5)].map((_, i) => {
        const value = i + 1
        return (
          <button
          key={value}
          onClick={() => setRating(value)}
          onMouseEnter={() => setHover(value)}
          onMouseLeave={() => setHover(0)}
          >
            <IoMdStar 
            className={cn("text-3xl",
              value <= (hover || rating) ? "text-blue-500" : "text-neutral-300"
            )}
            />
          </button>
        )
      })}
    </div>
  )
}

export default StartRating