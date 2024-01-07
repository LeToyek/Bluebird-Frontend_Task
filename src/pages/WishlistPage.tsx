import CarCard from '../components/body/CarCard';
import useVehicleStore from '../store/VehicleStore';

export default function WishlistPage() {
  const {likedCars} = useVehicleStore((state) => {
    return {
      likedCars: state.getLikedCars(),
    };
  });  
  return (
    <div>

      <div className="grid sm:grid-cols-1  md:grid-cols-3 xl:grid-cols-4 gap-4 justify-center pb-24">
        {likedCars.map((car) => (
          <CarCard car={car}/>
        ))}
      </div>
    </div>
    
  )
}
