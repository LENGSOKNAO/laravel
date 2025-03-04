import React, { useState } from "react";
import { Link } from "react-router-dom";

const Newbalance = () => {
  const [newbalance, setNewbalance] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setNewbalance(true)}
        onMouseLeave={() => setNewbalance(false)}
        className=" z-40"
      >
        <Link className=" ">NewBalance</Link>
        {newbalance && (
          <>
            <div className="absolute top-0 right-0 left-0 z-[-1] ">
              <div className="flex justify-center gap-[100px]  py-[100px] bg-[#fff]  ">
                <ul className="">
                  <h2> New</h2>
                  <li>
                    <Link className="list-nav-big">New Arrvials</Link>
                  </li>
                  <li>
                    <Link className="list-nav-big">Best Sellers</Link>
                  </li>
                  <li>
                    <Link className="list-nav-big">Best Drops</Link>
                  </li>
                </ul>
                <ul>
                  <h2>Men</h2>
                  <li>
                    <Link className="list-nav-big">New Arrvials</Link>
                  </li>
                  <li>
                    <Link className="list-nav-big">Shoes</Link>
                  </li>
                  <li>
                    <Link className="list-nav-big">Clothing</Link>
                  </li>
                  <li>
                    <Link className="list-nav-big">Kids</Link>
                  </li>
                </ul>
                <ul>
                  <h2> Women</h2>
                  <li>
                    <Link className="list-nav-big">New Arrvials</Link>
                  </li>
                  <li>
                    <Link className="list-nav-big">Shoes</Link>
                  </li>
                  <li>
                    <Link className="list-nav-big">Clothing</Link>
                  </li>
                  <li>
                    <Link className="list-nav-big">Kids</Link>
                  </li>
                </ul>
                <ul>
                  <h2>Kids</h2>
                  <li>
                    <Link className="list-nav-big">New Arrvials</Link>
                  </li>
                  <li>
                    <Link className="list-nav-big">Shoes</Link>
                  </li>
                  <li>
                    <Link className="list-nav-big">Clothing</Link>
                  </li>
                  <li>
                    <Link className="list-nav-big">Kids</Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
        {newbalance && (
          <>
            <div
              onMouseEnter={() => setNewbalance(false)}
              className="absolute z-[-2] inset-0 w-screen h-screen bg-[rgba(0,0,0,0.1)]"
            ></div>
          </>
        )}
      </div>
    </>
  );
};

export default Newbalance;
