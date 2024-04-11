// Header.js
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-blue-500 text-white py-4 px-4 sm:px-20 flex flex-row justify-between">
      <div className="container">
        <div
          className="w-20 flex flex-col gap-2"
          onClick={() => {
            navigate("/cab");
          }}
        >
          <img src="/images/m-indicator.jpg" alt="this is an image" />
          <p className="bg-gray-600" >Best Way</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-5">
        <div className="w-10">
          <div>
            <img src="/images/placeholder.jpg" alt="" className="rounded-full" />
          </div>
        </div>
        <div
          className="text-xl font-semibold cursor-pointer "
          onClick={() => navigate("/")}
        >
         <p className="bg-gray-600">User</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
