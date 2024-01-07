import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import useVehicleStore, { CarType } from "../../store/VehicleStore";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

export default function SearchBar() {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");

  const [cars,setCars] = useState<CarType[]>([])

  const vehicle = useVehicleStore((state) => state.vehicles);

  useEffect(() => {
    const tempArr :CarType[] = []
    vehicle.map((car) => car.car_type.map((carType) => tempArr.push(carType))
    )
    setCars(tempArr)
  }, [vehicle])

  const filteredCar =
    query === ""
      ? cars
      : cars.filter((car) =>
          car.vehicle
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-full z-50 sm:hidden">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="flex relative w-full items-center cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <div className="px-2 text-gray-400">
            <MagnifyingGlassIcon width={16} height={16} />
            </div>
            <Combobox.Input
              placeholder="Tap to search your car"
              className="w-full border-none py-2  pr-10 text-sm leading-5 text-gray-900 focus:ring-0 focus:outline-none"
              displayValue={(car: CarType) => car.vehicle}
              onChange={(event) => setQuery(event.target.value)}
            />
            {/* <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button> */}
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredCar.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredCar.map((car) => (
                  <Combobox.Option
                    key={car.vehicle}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-blue-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={car}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {car.vehicle}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
