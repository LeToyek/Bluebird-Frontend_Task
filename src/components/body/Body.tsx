import { useEffect } from "react";
import useVehicleStore from "../../store/VehicleStore";
import CustTab from "./Tab";

export default function Body() {
  const { isLoading, initVehicles, categories,vehicles } = useVehicleStore((state) => {
    return {
      isLoading: state.isLoading,
      initVehicles: state.setVehicles,
      vehicles: state.vehicles,
      categories: state.categories,
      error: state.error,
    };
  });
  // const vehicles = useVehicleStore((state) => state.vehicles)

  useEffect(() => {
    initVehicles();
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center">
        {isLoading ? (
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        ) : (
          categories && <CustTab categories={categories} cars={vehicles}  />
        )}
      </div>
    </div>
  );
}
