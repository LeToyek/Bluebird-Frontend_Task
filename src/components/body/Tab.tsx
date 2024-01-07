import { Tab } from "@headlessui/react";
import { Category, ObjType } from "../../store/VehicleStore";
import CarCard from "./CarCard";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CustTab({
  categories,
  cars,
}: {
  categories: Category[];
  cars: ObjType[];
}) {
  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 bg-white p-1">
          {categories.map((category) => (
            <Tab
              key={category.id}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-medium leading-5",
                  " focus:outline-none focus:border-b-4 focus:border-blue-700 transition-all duration-300",
                  selected
                    ? "bg-white text-blue-700 border-b-4 border-blue-700"
                    : "text-blue-300  hover:text-blue-500"
                )
              }
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
               "flex flex-wrap items-start mt-2.5 mb-5 overflow-x-auto justify-center w-full"
              )}
            >
              {cars.map((car)=>{
                return car.category_id === posts.id && (
                  car.car_type.map((carType) => (
                    <CarCard key={carType.vehicle} car={carType} />
                  )) 
                )
              })}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
