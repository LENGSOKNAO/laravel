import React, { use, useState } from "react";
import { HiBars4, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { BsChevronCompactRight } from "react-icons/bs";
import { RiArrowLeftWideLine } from "react-icons/ri";

const List = () => {
  const [bar, setBar] = useState(false);
  const [nike, setNike] = useState(false);
  const [anta, setAnta] = useState(false);
  const [newbalance, setNewbalance] = useState(false);
  const [salomon, setSalomon] = useState(false);
  const [qiaodan, setQiaodan] = useState(false);

  return (
    <>
      <HiBars4 onClick={() => setBar((bar) => !bar)} />
      {bar && (
        <div className="">
          <div className="absolute inset-0 w-screen h-screen bg-[rgba(0,0,0,0.2)]"></div>
          <div className="bg-absolute py-[20px]">
            <span
              onClick={() => setBar((bar) => !bar)}
              className="flex justify-end"
            >
              <HiXMark />
            </span>
            <div className="py-[50px]">
              <ul className="w-[250px] text-2xl">
                <li>
                  <Link
                    to="/nike"
                    onClick={() => setNike((nike) => !nike)}
                    className="list-small flex-between "
                  >
                    Nike <BsChevronCompactRight />
                  </Link>
                  {nike && (
                    <div className="bg-absolute py-[30px] ">
                      <span
                        onClick={() => setNike((nike) => !nike)}
                        className="flex items-center text-xl  "
                      >
                        <RiArrowLeftWideLine />
                        All
                      </span>
                      <h2 className="h2"> New</h2>
                      <ul className="w-[250px]">
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Best Sellers <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Best Drops <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                      <h2 className="h2">Men</h2>
                      <ul>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Shoes <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Clothing <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Kids <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                      <h2 className="h2"> Women</h2>
                      <ul>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Shoes <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Clothing <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Kids <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                      <h2 className="h2">Kids</h2>
                      <ul>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Shoes <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Clothing <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Kids <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    onClick={() => setAnta((anta) => !anta)}
                    className="list-small flex-between "
                  >
                    Anta <BsChevronCompactRight />
                  </Link>
                  {anta && (
                    <div className="bg-absolute py-[30px] ">
                      <span
                        onClick={() => setAnta((anta) => !anta)}
                        className="flex items-center text-xl  "
                      >
                        <RiArrowLeftWideLine />
                        All
                      </span>
                      <h2 className="h2"> New</h2>
                      <ul className="w-[250px]">
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Best Sellers <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Best Drops <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                      <h2 className="h2">Men</h2>
                      <ul>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Shoes <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Clothing <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Kids <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                      <h2 className="h2"> Women</h2>
                      <ul>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Shoes <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Clothing <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Kids <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                      <h2 className="h2">Kids</h2>
                      <ul>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Shoes <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Clothing <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Kids <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    onClick={() => setNewbalance((newbalance) => !newbalance)}
                    className="list-small flex-between "
                  >
                    Newbalance <BsChevronCompactRight />
                  </Link>
                  {newbalance && (
                    <div className="bg-absolute py-[30px] ">
                      <span
                        onClick={() =>
                          setNewbalance((newbalance) => !newbalance)
                        }
                        className="flex items-center text-xl  "
                      >
                        <RiArrowLeftWideLine />
                        All
                      </span>
                      <h2 className="h2"> New</h2>
                      <ul className="w-[250px]">
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Best Sellers <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Best Drops <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                      <h2 className="h2">Men</h2>
                      <ul>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Shoes <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Clothing <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Kids <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                      <h2 className="h2"> Women</h2>
                      <ul>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Shoes <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Clothing <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Kids <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                      <h2 className="h2">Kids</h2>
                      <ul>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Shoes <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Clothing <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Kids <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    onClick={() => setSalomon((salomon) => !salomon)}
                    className="list-small flex-between "
                  >
                    Salomon <BsChevronCompactRight />
                  </Link>
                  {salomon && (
                    <div className="bg-absolute py-[30px] ">
                      <span
                        onClick={() => setSalomon((salomon) => !salomon)}
                        className="flex items-center text-xl  "
                      >
                        <RiArrowLeftWideLine />
                        All
                      </span>
                      <h2 className="h2"> New</h2>
                      <ul className="w-[250px]">
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Best Sellers <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Best Drops <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                      <h2 className="h2">Men</h2>
                      <ul>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Shoes <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Clothing <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Kids <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                      <h2 className="h2"> Women</h2>
                      <ul>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Shoes <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Clothing <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Kids <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                      <h2 className="h2">Kids</h2>
                      <ul>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Shoes <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Clothing <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Kids <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    onClick={() => setQiaodan((qiaodan) => !qiaodan)}
                    className="list-small flex-between "
                  >
                    Qiaodan <BsChevronCompactRight />
                  </Link>
                  {qiaodan && (
                    <div className="bg-absolute py-[30px] ">
                      <span
                        onClick={() => setQiaodan((qiaodan) => !qiaodan)}
                        className="flex items-center text-xl  "
                      >
                        <RiArrowLeftWideLine />
                        All
                      </span>
                      <h2 className="h2"> New</h2>
                      <ul className="w-[250px]">
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Best Sellers <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Best Drops <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                      <h2 className="h2">Men</h2>
                      <ul>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Shoes <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Clothing <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Kids <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                      <h2 className="h2"> Women</h2>
                      <ul>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Shoes <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Clothing <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Kids <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                      <h2 className="h2">Kids</h2>
                      <ul>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            New Arrvials <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Shoes <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Clothing <BsChevronCompactRight />
                          </Link>
                        </li>
                        <li>
                          <Link className="list-nav-small flex-between ">
                            Kids <BsChevronCompactRight />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default List;
