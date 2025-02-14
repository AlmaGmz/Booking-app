import { GoLocation } from "react-icons/go";
import StarRaiting from "../../../components/ui/StarRaiting"


function Description({ rating, address, description, className}) {
  return (
    <div className={className}>
     <StarRaiting rating={rating}/> 
     <p className="flex items-center gap 1 text-sm mb-4">
      <GoLocation />{address}</p>
      <p>{description}</p>
      
      </div>
  )
}

export default Description