import { useEffect, useState } from "react";
import { MdFilterListAlt } from "react-icons/md";
import {api} from '../../services/api'
import HotelsList from "./components/HotelsList";
import SearchForm from "./components/SearchForm";
import FilterForm from "./components/FilterForm";
import Menu from "../../components/common/Menu";

function Home() {
  const [hotels, setHotels] = useState([])
  const [search, setSearch] = useState(' ')
  const [open, setOpen] = useState(false)

  useEffect(()=> {
    api.get('/hotels')
    .then(res => {
      setHotels(res.data)
    })
  }, [])

const filtered = hotels.filter(hotel =>(
  hotel.name.toLowerCase().includes(search.toLowerCase())
))

const handleChangeFilterByCity = (city) => {
  api.get(`/hotels${city ? `?cityId=${city}` : ''}`)
  .then(res => {
    setHotels(res.data)
  })
}

  return (
    <div className="max-w-5xl max-[1024px]:px-4 mx-auto">
      <div className="pt-12 flex items-center justify-center gap-4" >
            <SearchForm setSearch={setSearch}className="w-full sm:w-fit"/>
            <button className="min-sm:hidden cursor-pointer" onClick={()=> setOpen(true)}>
            <MdFilterListAlt className="size-6"/>
            </button>
            <Menu open={open} setOpen={setOpen}>
            <FilterForm filterById={handleChangeFilterByCity}
            className="w-full sm:w-fit"/>
            </Menu>
      </div>
      <div className="py-12">
      <HotelsList hotels={filtered} />
     </div>
     </div>
  )
}

export default Home;