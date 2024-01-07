import axios from 'axios';
import { create } from 'zustand';
export type ObjType = {
  id: number,
  category_id: number,
  car_type: CarType[],
};

export type CarType = {
  vehicle: string;
  imageURL: string;
  price: string;
  description: string[];
}

export type Category = {
  id: number;
  name: string;
  imageUrl: string;
}

type VehicleStore = {
  vehicles: ObjType[];
  categories: Category[];
  selectedCategory: number;
  isLoading: boolean;
  error: unknown;
  setVehicles: () => void;
  setSelectedCategory: (category: number) => void;
};

const useVehicleStore = create<VehicleStore>((set) => ({
  vehicles: [],
  categories: [],
  selectedCategory: 0,
  isLoading: false,
  error: '',
  setVehicles:  async () =>{
    set({ isLoading: true });
    console.log("first")
    try {
      const res = await axios.get("https://private-f2fbfb-ridecar2.apiary-mock.com/vehicles")
      const data = await res.data;
      set({ categories: data['category'],vehicles: data['type'], isLoading: false });
    } catch (error) {
      set({ error: error, isLoading: false });
    }
  },
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));

export default useVehicleStore;
