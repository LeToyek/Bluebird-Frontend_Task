import { useEffect } from "react";
import useVehicleStore from "../../store/VehicleStore";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function Layout({children}) {
  const {initVehicles } = useVehicleStore((state) => {
    return {
      initVehicles: state.setVehicles,
    };
  });

  useEffect(() => {
    initVehicles();
  }, []);
  return (
    <div>
      <Navbar />
      {children}
      <Footer/>
    </div>
  )
}
