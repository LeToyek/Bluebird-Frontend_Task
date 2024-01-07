import axios from "axios";
import { create } from "zustand";

export type ObjType = {
  id: number;
  category_id: number;
  car_type: CarType[];
};

export type CarType = {
  vehicle: string;
  imageURL: string;
  price: string;
  description: string[];
  isLiked: boolean;
  isBooked: boolean;
};

export type Category = {
  id: number;
  name: string;
  imageUrl: string;
};

type VehicleStore = {
  vehicles: ObjType[];
  categories: Category[];
  selectedCar: CarType;
  isLoading: boolean;
  error: unknown;
  setVehicles: () => void;
  setSelectedCar: (car: CarType) => void;
  likeCar: (carName: string) => void;
  bookCar: (carName: string) => void;
  getBookedCars: () => CarType[];
  getLikedCars: () => CarType[];
};

const useVehicleStore = create<VehicleStore>((set) => ({
  vehicles: [],
  categories: [],
  selectedCar: {} as CarType,
  isLoading: false,
  error: "",
  setVehicles: async () => {
    set({ isLoading: true });
    console.log("first");
    try {
      const res = await axios.get(
        "https://private-f2fbfb-ridecar2.apiary-mock.com/vehicles"
      );
      const data = await res.data;
      set({
        categories: data["category"],
        vehicles: data["type"],
        isLoading: false,
      });
    } catch (error) {
      set({ error: error, isLoading: false });
    }
  },
  setSelectedCar: (car: CarType) => set({ selectedCar: car }),
  likeCar: (carName: string) => {
    const newVehicles = [...useVehicleStore.getState().vehicles];
    newVehicles.map((vehicle) =>
      vehicle.car_type.map((car) => {
        if (car.vehicle === carName) {
          car.isLiked = !car.isLiked;
          console.log(`car.isLiked: ${car.isLiked}`)
        }
      })
    );

    set({ vehicles: newVehicles });
  },
  bookCar: (carName: string) => {
    const newVehicles = [...useVehicleStore.getState().vehicles];
    newVehicles.map((vehicle) =>
      vehicle.car_type.map((car) => {
        if (car.vehicle === carName) {
          car.isBooked = !car.isBooked;
        }
      })
    );

    set({ vehicles: newVehicles });
  },
  getBookedCars: () => {
    const newVehicles = [...useVehicleStore.getState().vehicles];
    const bookedCars: CarType[] = [];
    newVehicles.map((vehicle) =>
      vehicle.car_type.map((car) => {
        if (car.isBooked) {
          bookedCars.push(car);
        }
      })
    );
    console.log(`bookedCars: ${bookedCars}`)
    return bookedCars;
  },
  getLikedCars: () => {
    const newVehicles = [...useVehicleStore.getState().vehicles];
    const likedCars: CarType[] = [];
    newVehicles.map((vehicle) =>
      vehicle.car_type.map((car) => {
        if (car.isLiked) {
          likedCars.push(car);
        }
      })
    );
    return likedCars;
  },
}));

export default useVehicleStore;
