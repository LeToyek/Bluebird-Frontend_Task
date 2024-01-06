import { useEffect } from "react"
import useVehicleStore from "../../store/VehicleStore"
import CarCard from "./CarCard"

export default function Body() {
  const {isLoading, initVehicles,vehicles} = useVehicleStore((state) => {
    return {
      isLoading: state.isLoading,
      initVehicles: state.setVehicles,
      vehicles: state.vehicles,
      error: state.error
    }
  })
  // const vehicles = useVehicleStore((state) => state.vehicles)

  useEffect(() => {
    initVehicles()
    console.log("test initVehicles")
  }, [])
  return (
    <div>
      {
        isLoading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          vehicles[0] && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
              vehicles[0].car_type.map((car) => (
                <CarCard key={car.vehicle} car={car} />
              ))

              
            }
          </div>
        )
      }
    </div>
  )
}
