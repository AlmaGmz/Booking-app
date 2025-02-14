import { IoMdStar, IoMdStarHalf, IoMdStarOutline  } from "react-icons/io";

function StarRaiting({ rating }) {
const renderStar =(index) => {

  if(index < Math.floor(rating)){
    return <IoMdStar/>
  } else if (index < rating) {
    return <IoMdStarHalf/>
  } else{
    return <IoMdStarOutline/>
  }

}

  return (
    <div className="flex items-center gap-1">
      <span className="flex items-center ">
{[...Array(5)].map((_, i)=>   (
<span key={i + 1} className="text-lg text-sky-800">{renderStar(i)}</span>
))}
</span>
<span className="text-sm">
  {Number.isInteger(rating) ? rating.toFixed(1) : rating}
  </span>

    </div>
  )
}

export default StarRaiting