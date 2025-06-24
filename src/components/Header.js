import { LOGO_URL } from "../utils/contents";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInuser } = useContext(UserContext);
  const cartItems = useSelector((store) => store?.cart?.items );

  return (
    <div className="flex flex-wrap justify-between border bg-orange-200">
      <img className="w-[150px] h-[100px] p-2" alt="logo" src={LOGO_URL} />
      <div>
        <ul className="flex gap-8 items-center text-lg font-medium text-gray-700">
          <li className="p-2 font-bold">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="hover:text-orange-600">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-600">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-orange-600">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-orange-600">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:text-orange-600 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="px-4 py-2 m-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300"
            onClick={() =>
              setLoginBtn((prev) => (prev === "Login" ? "Logout" : "Login"))
            }
          >
            {loginBtn}
          </button>
          {loggedInuser && (
            <li className="hover:text-orange-600 font-bold py-5 m-5">
              {loggedInuser}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header
