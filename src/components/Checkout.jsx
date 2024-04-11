import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock car details
  const cars = [
    {
      id: 5,
      name: "Rickshaw",
      image: "/images/rickshaw.jpg",
      description: "Fast and Cheap Rickshaw.",
      price: 25,
    },
    {
      id: 6,
      name: "Bus",
      image: "/images/bus.jpg",
      description: "Great for environment",
      price: 5,
    },
    {
      id: 7,
      name: "Local Train",
      image: "/images/local-train.jpg",
      description: "Fast and Easy way of Transportation.",
      price: 4,
      addInfo: [
        "Churchgate to Borivali in every 5 mins",
        "Churchgate to Virar in every 15 mins",
        "Churchgate to Dhanu Road in every 30 mins",
      ],
    },
    {
      id: 8,
      name: "Metro",
      image: "/images/metro.jpg",
      description: "Full on AC and Beat the traffic.",
      price: 20,
      addInfo: [
        "Ghatkopar to Versova in every 10 mins",
        "Gundavali to Mira Road in every 15 mins",
        "Andheri West to Mira Road in every 7 mins",
      ],
    },
  ];

  const handlePayment = () => {
    alert("booking done! We will call you shortly for Payment.");
  };

  // Find the car details based on id
  const carDetails = cars.find((car) => car.id === parseInt(id));

  if (!carDetails) {
    return <div>Car not found</div>; // Handle case where car is not found
  }

  return (
    <div className="max-w-lg mx-auto px-2">
      <h1 className="text-2xl font-semibold mb-4 flex justify-center mt-5">Checkout</h1>
      <div className="bg-blue-300 rounded-md shadow-md p-4">
        <div className="m-4 bg-white rounded-md shadow-md overflow-hidden w-50">
          <img
            src={carDetails.image}
            alt={carDetails.name}
            className="w-full h-40 object-cover"
          />
        </div>
        <h2 className="text-lg font-semibold mb-2">{carDetails.name}</h2>
        <p className="text-sm mb-2">{carDetails.description}</p>
        <p className="text-sm mb-2">
          Price: Rs {carDetails.price}+ {Math.ceil(carDetails.price / 10)} per
          km
        </p>
        <p className="text-sm mb-2">ID: {carDetails.id}</p>
        {carDetails.addInfo
          ? carDetails.addInfo.map((info, index) => (
              <p className="text-slate-500" key={index}>{info}</p>
            ))
          : null}
        {/* Add checkout form and process here */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mt-4"
          onClick={handlePayment}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
