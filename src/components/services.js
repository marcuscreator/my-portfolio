import {
  FaLaptopCode,
  FaTools,
  FaShoppingCart,
  FaDatabase,
} from "react-icons/fa";

export default function Services() {
  return (
    <section className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            What Services Do I Offer?
          </h2>
          <p className="text-gray-300">
            I offer a range of services to meet your needs, from creating
            stunning portfolio websites to comprehensive ecommerce solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
            <FaLaptopCode className="text-4xl text-blue-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Portfolio Websites</h3>
            <p className="text-gray-300 text-center">
              Create stunning and interactive portfolio websites that showcase
              your work and achievements effectively.
            </p>
          </div>

          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
            <FaTools className="text-4xl text-green-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">
              Hardware & Software Repair
            </h3>
            <p className="text-gray-300 text-center">
              Expert repair services for both hardware and software issues,
              ensuring your technology runs smoothly.
            </p>
          </div>

          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
            <FaShoppingCart className="text-4xl text-yellow-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Business Websites</h3>
            <p className="text-gray-300 text-center">
              Professional business websites designed to enhance your online
              presence and attract more customers.
            </p>
          </div>

          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
            <FaDatabase className="text-4xl text-red-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">
              Ecommerce Websites with Full DB
            </h3>
            <p className="text-gray-300 text-center">
              Build robust ecommerce solutions with full database integration,
              making it easier to manage products and transactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
