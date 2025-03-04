import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { CiYoutube } from "react-icons/ci";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => (
  <footer className="m-[200px_0_0_0]">
    {/* md */}
    <div className=" sm:block md:hidden lg:hidden xl:hidden">
      <div className="flex flex-col items-center gap-10 px-[20px] ">
        <Link to="/">
          <img src="/src/assets/logo.png" alt="" />
        </Link>
        <div className="w-[90vw]">
          <h2 className="text-4xl font-black text-[rgb(17,17,17)] text-center ">
            {" "}
            Join The Our Group{" "}
          </h2>
          <div className="border-b-[1px] flex-center my-[20px] ">
            <input
              type="text"
              className="w-full outline-none border-none py-2 font-light   "
              placeholder="Email Address"
            />
            <GoArrowRight className="text-3xl" />
          </div>
          <p className="text-sm font-light">
            By submitting your email, you acknowledge and agree to share your
            information with ANTA. Your information will be processed in
            accordance with our{" "}
            <Link className="text-blue-300 hover:text-blue-500 hover:underline ">
              privacy policy.
            </Link>
          </p>
        </div>
      </div>
    </div>
    {/* md */}
    <div className="hidden sm:hidden md:block lg:hidden xl:hidden">
      <div className="flex flex-col items-center gap-10 px-[20px] ">
        <Link to="/">
          <img src="/src/assets/logo.png" alt="" />
        </Link>
        <div className="w-[80vw]">
          <h2 className="text-4xl font-black text-[rgb(17,17,17)] ">
            {" "}
            Join The Our Group{" "}
          </h2>
          <div className="border-b-[1px] flex-center my-[20px] ">
            <input
              type="text"
              className="w-full outline-none border-none py-2 font-light   "
              placeholder="Email Address"
            />
            <GoArrowRight className="text-3xl" />
          </div>
          <p className="text-sm font-light">
            By submitting your email, you acknowledge and agree to share your
            information with ANTA. Your information will be processed in
            accordance with our{" "}
            <Link className="text-blue-300 hover:text-blue-500 hover:underline ">
              privacy policy.
            </Link>
          </p>
        </div>
      </div>
    </div>
    {/* lg */}
    <div className="hidden sm:hidden md:hidden lg:block xl:hidden">
      <div className="flex-between px-[20px] ">
        <Link to="/">
          <img src="/src/assets/logo.png" alt="" />
        </Link>
        <div className="w-[40vw]">
          <h2 className="text-4xl font-black text-[rgb(17,17,17)] ">
            {" "}
            Join The Our Group{" "}
          </h2>
          <div className="border-b-[1px] flex-center my-[20px] ">
            <input
              type="text"
              className="w-full outline-none border-none py-2 font-light   "
              placeholder="Email Address"
            />
            <GoArrowRight className="text-3xl" />
          </div>
          <p className="text-sm font-light">
            By submitting your email, you acknowledge and agree to share your
            information with ANTA. Your information will be processed in
            accordance with our{" "}
            <Link className="text-blue-300 hover:text-blue-500 hover:underline ">
              privacy policy.
            </Link>
          </p>
        </div>
      </div>
    </div>
    {/* xl */}
    <div className="hidden sm:hidden md:hidden lg:hidden xl:block">
      <div className="flex-between px-[50px] ">
        <Link to="/">
          <img src="/src/assets/logo.png" alt="" />
        </Link>
        <div className="w-[30vw]">
          <h2 className="text-5xl font-black text-[rgb(17,17,17)] ">
            {" "}
            Join The Our Group{" "}
          </h2>
          <div className="border-b-[1px] flex-center my-[20px] ">
            <input
              type="text"
              className="w-full outline-none border-none py-2 font-light   "
              placeholder="Email Address"
            />
            <GoArrowRight className="text-3xl" />
          </div>
          <p className="text-sm font-light">
            By submitting your email, you acknowledge and agree to share your
            information with ANTA. Your information will be processed in
            accordance with our{" "}
            <Link className="text-blue-300 hover:text-blue-500 hover:underline ">
              privacy policy.
            </Link>
          </p>
        </div>
      </div>
    </div>
    <div className=" sm:hidden">
      <div className="item-nav">
        <h2 className="py-4 f ">New</h2>
        <ul className="item-list">
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              Bast Sellers
            </Link>
          </li>
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              Latest Drops
            </Link>
          </li>
        </ul>
      </div>
      <div className="item-nav">
        <h2 className="py-4 f ">Man</h2>
        <ul className="item-list">
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              Bast Sellers
            </Link>
          </li>
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              Bast Shoes
            </Link>
          </li>
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              Bast Clothing
            </Link>
          </li>
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              Bast Sport
            </Link>
          </li>
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              Latest Drops
            </Link>
          </li>
        </ul>
      </div>
      <div className="item-nav">
        <h2 className="py-4 f ">Women</h2>
        <ul className="item-list">
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              Bast Sellers
            </Link>
          </li>
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              Bast Shoes
            </Link>
          </li>
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              Bast Clothing
            </Link>
          </li>
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              Bast Sport
            </Link>
          </li>
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              Latest Drops
            </Link>
          </li>
        </ul>
      </div>
      <div className="item-nav">
        <h2 className="py-4 f ">Kids</h2>
        <ul className="item-list">
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              Bast Sellers
            </Link>
          </li>
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              Bast Shoes by Age
            </Link>
          </li>
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              Bast Clothing by Age
            </Link>
          </li>
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              Bast Sport by Age
            </Link>
          </li>
          <li>
            <Link className="text-hover list-footer px-[10px] ">
              Latest Drops
            </Link>
          </li>
        </ul>
      </div>
    </div>
    {/* xl */}
    <div className="hidden sm:block">
      <div className="flex-center  py-[50px]">
        <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 gap-[100px] ">
          <div className="item-nav">
            <h2 className="py-4 f ">New</h2>
            <ul className="item-list">
              <li>
                <Link className="text-hover list-footer ">New Arrivals</Link>
              </li>
              <li>
                <Link className="text-hover list-footer ">Bast Sellers</Link>
              </li>
              <li>
                <Link className="text-hover list-footer ">Latest Drops</Link>
              </li>
            </ul>
          </div>
          <div className="item-nav">
            <h2 className="py-4 f ">Man</h2>
            <ul className="item-list">
              <li>
                <Link className="text-hover list-footer ">New Arrivals</Link>
              </li>
              <li>
                <Link className="text-hover list-footer ">Bast Sellers</Link>
              </li>
              <li>
                <Link className="text-hover list-footer ">Bast Shoes</Link>
              </li>
              <li>
                <Link className="text-hover list-footer ">Bast Clothing</Link>
              </li>
              <li>
                <Link className="text-hover list-footer ">Bast Sport</Link>
              </li>
              <li>
                <Link className="text-hover list-footer ">Latest Drops</Link>
              </li>
            </ul>
          </div>
          <div className="item-nav">
            <h2 className="py-4 f ">Women</h2>
            <ul className="item-list">
              <li>
                <Link className="text-hover list-footer ">New Arrivals</Link>
              </li>
              <li>
                <Link className="text-hover list-footer ">Bast Sellers</Link>
              </li>
              <li>
                <Link className="text-hover list-footer ">Bast Shoes</Link>
              </li>
              <li>
                <Link className="text-hover list-footer ">Bast Clothing</Link>
              </li>
              <li>
                <Link className="text-hover list-footer ">Bast Sport</Link>
              </li>
              <li>
                <Link className="text-hover list-footer ">Latest Drops</Link>
              </li>
            </ul>
          </div>
          <div className="item-nav">
            <h2 className="py-4 f ">Kids</h2>
            <ul className="item-list">
              <li>
                <Link className="text-hover list-footer ">New Arrivals</Link>
              </li>
              <li>
                <Link className="text-hover list-footer ">Bast Sellers</Link>
              </li>
              <li>
                <Link className="text-hover list-footer ">
                  Bast Shoes by Age
                </Link>
              </li>
              <li>
                <Link className="text-hover list-footer ">
                  Bast Clothing by Age
                </Link>
              </li>
              <li>
                <Link className="text-hover list-footer ">
                  Bast Sport by Age
                </Link>
              </li>
              <li>
                <Link className="text-hover list-footer ">Latest Drops</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="">
      <div className="flex border-t-[1px] py-4 gap-[10px] text-xl px-3 ">
        <Link className="iconHover">
          <FaYoutube />
        </Link>
        <Link className="iconHover">
          <FaTelegram />
        </Link>
        <Link className="iconHover">
          <FaFacebook />
        </Link>
        <Link className="iconHover">
          <FaFacebookMessenger />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
