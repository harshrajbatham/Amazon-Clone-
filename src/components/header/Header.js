import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { allItems } from "../../constants";
import { logo } from "../../assets/index";
import { LocationOnOutlined } from "@mui/icons-material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import HeaderBottom from "./HeaderBottom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { getAuth, signOut } from "firebase/auth";
import { userSignOut } from "../../redux/amazonSlice";

const Header = () => {
  const auth = getAuth();
 const dispatch = useDispatch()
  const products = useSelector((state) => state.amazonReducer.products);
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  console.log(userInfo);
  const ref = useRef();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        showAll && setShowAll(false);
      }
    });
  }, [ref, showAll]);
  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(userSignOut())
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    console.log("done")
  }

  // const [showAll, setShowAll] = useState(false);
  // const products = useSelector((state) => state.amazonReducer.products);
  // console.log(products);
  //all listing category

  return (
    <>
      <div className="w-full sticky top-0 z-50">
        <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
          {/* ============ Image Start here ================ */}
          <Link to="/">
            <div className="headerHover">
              <img className="w-24 mt-2" src={logo} alt="logo" />
            </div>
          </Link>
          {/* ============ Image End here ================== */}
          {/* ============ Deliver Start here ============== */}
          <div className="headerHover block sm:hidden  md:inline-flex">
            <LocationOnOutlined />
            <p className="text-sm text-lightText font-light flex flex-col">
              Deliver to
              <span className="text-sm font-semibold -mt-1 text-whiteText">
                {" "}
                indore
              </span>
            </p>
          </div>
          {/* ============ Deliver End here ================ */}
          {/* ============ Search Start here =============== */}
          <div className="lg:inline-flex flex-col lg:flex-row hidden w-full h-10 rounded-md  relative">
            {/* <div className=" h-10 rounded-md flex sm:flex-row  relative"> */}
            <span
              onClick={() => setShowAll(!showAll)}
              className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
            >
              Alls <span></span>
              <ArrowDropDownOutlinedIcon />
            </span>

            {showAll && (
              <div>
                <ul ref={ref} className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">
                  {allItems.map((item) => (
                    <li
                      className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                      key={item._id}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <input
              className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
              type="text"
            />
            <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
              <SearchIcon />
            </span>
          </div>

          {/* ============ Search End here ================= */}
          {/* ============ Signin Start here =============== */}
          <Link to="/signin">
            <div className="flex flex-col items-start justify-center headerHover">
              {userInfo ? (
                <p className="text-xs text-gray-100 font-medium">
                  {userInfo.userName}
                </p>
              ) : (
                <p className="text-sm md:text-xs text-white md:text-lightText font-light">
                  Hello, Sign in
                </p>
              )}

              <p className="text-sm font-semibold -mt-1 text-whiteText md:inline-flex">
                Accounts & Lists{" "}
                <span>
                  <ArrowDropDownOutlinedIcon />
                </span>
              </p>
            </div>
          </Link>
          {/* ============ Signin End here ================= */}
          {/* ============ Orders Start here =============== */}
          <div className="hidden ldl:flex flex-col items-start justify-center headerHover">
            <p className="text-xs text-lightText font-light">Returns</p>
            <p className="text-sm font-semibold -mt-1 text-whiteText">
              & Orders
            </p>
          </div>
          {/* ============ Orders End here ================= */}
          {/* ============ Cart Start here ================= */}
          <Link to="/cart">
            <div className="flex items-start justify-center headerHover relative">
              <ShoppingCartIcon />
              <p className="text-xs font-semibold mt-3 text-whiteText">Cart </p>
              <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                {products.length > 0 ? products.length : 0}
              </span>
            </div>
          </Link>
          {userInfo && (
            <div onClick={handleLogout} className="flex flex-col justify-center items-center headerHover relative">
              <LogoutIcon />
              <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteText">
                Log out
              </p>
            </div>
          )}
          {/* ============ Image Start here ================ */}
          {/* ============ Image End here ================== */}
          {/* ============ Deliver Start here ============== */}
          {/* ============ Deliver End here ================ */}
          {/* ============ Search Start here =============== */}
          {/* ============ Search End here ================= */}
          {/* ============ Signin Start here =============== */}
          {/* ============ Signin End here ================= */}
          {/* ============ Orders Start here =============== */}
          {/* ============ Orders End here ================= */}
          {/* ============ Cart Start here ================= */}
          {/* ============ Cart End here =================== */}
        </div>
        {/* here header part bottom portion which has seperate file */}
        <HeaderBottom />
      </div>
    </>
  );
};
export default Header;
