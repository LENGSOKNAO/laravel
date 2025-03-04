import React from "react";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import List from "./small/List";
import Nike from "./Big/Nike";
import Anta from "./Big/Anta";
import Newbalance from "./Big/Newbalance";
import Salomon from "./Big/Salomon";
import Qiaodan from "./Big/Qiaodan";

const Nav = () => {
  return (
    <nav>
      <div className="md:block lg:hidden  xl:hidden">
        <div className="flex-between py-[20px] ">
          <Link to="/" className="">
            <img
              className="w-[120px]"
              src="/src/assets/logo.png"
              alt="logo-store"
            />
          </Link>
          <ul className="flex-center text-3xl px-2 ">
            <li>
              <Link>
                <CiSearch />
              </Link>
            </li>
            <li>
              <Link>
                <CiShoppingCart />
              </Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link>
                <CiHeart />
              </Link>
            </li>
            <li>
              <Link>
                <List />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" hidden md:hidden lg:block">
        <div className="flex-between  ">
          <Link to="/" className="">
            <img className="w-[150px]" src="/src/assets/logo.png" alt="" />
          </Link>
          <ul className="flex-center gap-4 font-semibold text-lg z-50 ">
            <li>
              <Nike />
            </li>
            <li>
              <Anta />
            </li>
            <li>
              <Newbalance />
            </li>
            <li>
              <Salomon />
            </li>
            <li>
              <Qiaodan />
            </li>
          </ul>
          <ul className="flex-center  text-4xl  ">
            <li>
              <Link>
                <CiSearch />
              </Link>
            </li>
            <li>
              <Link>
                <CiHeart />
              </Link>
            </li>
            <li>
              <Link>
                <CiShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
