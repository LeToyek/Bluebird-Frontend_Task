import useVehicleStore from "../store/VehicleStore";

export default function DetailCarPage() {
  const { car,category } = useVehicleStore((state) => {
    return {
      car: state.selectedCar,
      category: state.selectedCategory,
    };
  });
  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full  rounded border border-gray-200"
              src={car.imageURL}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {car.vehicle}
              </h1>

              <p className="leading-relaxed flex-col">
                {car.description.map((desc) => (
                  <span key={desc} className="px-2 py-1 mr-2 text-sm font-medium ">
                    {desc}
                  </span>
                ))}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {car.price}
                </span>
                <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Book
                </button>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
