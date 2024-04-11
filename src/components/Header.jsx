// Header.js
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-blue-500 text-white py-4 px-20 flex flex-row justify-between">
      <div className="container mx-auto">
        <div className="w-20" onClick={() => {
            navigate("/cab");
          }}>
          <img src="/images/m-indicator.jpg" alt="this is an image" />
          <p>Best Way</p>
        </div>
        {/* <h1
          className="text-xl font-semibold cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Cab Booking App.
        </h1> */}
      </div>
      <div>
        <div
          className="text-xl font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          User
        </div>
      </div>
    </header>
  );
};

export default Header;
