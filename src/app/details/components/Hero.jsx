import { TbWorld } from "react-icons/tb";

function Hero({ name, images, city, country }) {
  images = images ? images[0].url : '';

  return (
    <div className="bg-blue-100 h-[35dvh] bg-cover bg-center"      
      style={{ backgroundImage: `url("${images}")` }}>

  <div className="grid h-full place-content-center text-white text-center bg-black/50 backdrop-blur-[3px]">
    <h1 className=" text-4xl font-semibold mb-2">{name}</h1>
    <p className="flex items-center justify-center gap-1">
      <TbWorld /> {city}, {country}</p>
  </div>
   </div>
  );
}

export default Hero;
