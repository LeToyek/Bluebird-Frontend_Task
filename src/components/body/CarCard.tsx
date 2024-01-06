import { CarType } from "../../store/VehicleStore";

export default function CarCard({ car }: { car: CarType }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="bg-gray-200 bg-opacity-25 p-4">
        <div className="flex justify-center">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src={car.imageURL} alt={car.vehicle} />
          </div>
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {car.vehicle}
            </h3>
            {
              car.description.map((desc) => (
                <p key={desc} className="text-sm text-gray-500">{desc}</p>
              ))
            }
          </div>
        </div>
      </div>
      
    </div>
  );
}
