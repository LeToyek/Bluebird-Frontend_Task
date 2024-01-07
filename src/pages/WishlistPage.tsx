import useVehicleStore from '../store/VehicleStore';

export default function WishlistPage() {
  const {bookedCars} = useVehicleStore((state) => {
    return {
      bookedCars: state.getBookedCars(),
    };
  });  
  return (
    <div>
      <h1>Wishlist Page</h1>
      <div className="grid grid-cols-3 gap-4">
        {bookedCars.map((car) => (
          <div className="m-4 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={car.imageURL}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-500">
                  {car.vehicle}
                </h5>
              </a>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-600">
                  {car.price}
                </span>
                {/* <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a> */}
              </div>
              <div className="flex flex-col mt-2.5 mb-5">
                {car.description.map((desc) => (
                  <span
                    key={desc}
                    className="px-2 py-1 mr-2 text-sm font-medium "
                  >
                    {desc}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-2">
                <button
                  // onClick={() => handleLike(car.vehicle)}
                  type="button"
                  className="col-span-2 flex justify-center p-4  rounded-md mr-2 bg-blue-400"
                >
                  {/* <BookmarkIcon
                    className={classNames(
                      "w-6 h-6 text-white"
                    )}
                    aria-hidden="true"
                  /> */}
                  <h2 className="ml-2 text-white">Book Now</h2>
                </button>
                <button
                  // onClick={() => handleLike(car.vehicle)}
                  type="button"
                  className="col-span-1 flex justify-center p-4 border-2 rounded-md mr-2 border-red-400"
                >
                  {/* <HeartIcon
                    className={classNames(
                      "w-6 h-6",
                      car.isLiked ? "  text-white" : "  text-red-400"
                    )}
                    aria-hidden="true"
                  /> */}
                </button>
                <button
                  type="button"
                  className="col-span-1 flex justify-center p-4 border-2 rounded-md border-blue-200 mr-2"
                >
                  {/* <ShareIcon className="w-6 h-6 text-blue-400" aria-hidden="true" /> */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}
