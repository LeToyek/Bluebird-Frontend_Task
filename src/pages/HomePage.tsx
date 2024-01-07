import CustTab from "../components/body/Tab";
import useVehicleStore from "../store/VehicleStore";

export default function HomePage() {
  const { isLoading, categories,vehicles } = useVehicleStore((state) => {
    return {
      isLoading: state.isLoading,
      initVehicles: state.setVehicles,
      vehicles: state.vehicles,
      categories: state.categories,
      error: state.error,
    };
  });
  // const vehicles = useVehicleStore((state) => state.vehicles)

 
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
