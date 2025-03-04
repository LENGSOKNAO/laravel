import React, { useState } from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ListNav = () => {
  const [nike, setNike] = useState(false);
  const [salomon, setSalomon] = useState(false);
  const [anta, setAnta] = useState(false);
  const [qiaodan, setQiaodan] = useState(false);
  const [newBalance, setNewBalance] = useState(false);

  return (
    <div className="py-[50px]">
      <ul className="px-[20px] text-2xl   flex flex-col gap-1 ">
        <li className="hover:bg-[rgba(0,0,0,0.1)] px-3 py-1 rounded-[3px] ">
          <Link onClick={() => setNike((nike) => !nike)}>Nike</Link>
          {nike && (
            <div className=" ">
              <ul className="px-[5px]">
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    New <BsChevronCompactRight />
                  </Link>
                </li>
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    Men <BsChevronCompactRight />
                  </Link>
                </li>
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    Women <BsChevronCompactRight />
                  </Link>
                </li>
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    Kids <BsChevronCompactRight />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="hover:bg-[rgba(0,0,0,0.1)] px-3 py-1 rounded-[3px] ">
          <Link onClick={() => setSalomon((salomon) => !salomon)}>
            {" "}
            Salomon
          </Link>
          {salomon && (
            <div className=" ">
              <ul className="px-[5px]">
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    New <BsChevronCompactRight />
                  </Link>
                </li>
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    Men <BsChevronCompactRight />
                  </Link>
                </li>
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    Women <BsChevronCompactRight />
                  </Link>
                </li>
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    Kids <BsChevronCompactRight />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="hover:bg-[rgba(0,0,0,0.1)] px-3 py-1 rounded-[3px] ">
          <Link onClick={() => setAnta((anta) => !anta)}>Anta</Link>
          {anta && (
            <div className=" ">
              <ul className="px-[5px]">
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    New <BsChevronCompactRight />
                  </Link>
                </li>
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    Men <BsChevronCompactRight />
                  </Link>
                </li>
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    Women <BsChevronCompactRight />
                  </Link>
                </li>
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    Kids <BsChevronCompactRight />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="hover:bg-[rgba(0,0,0,0.1)] px-3 py-1 rounded-[3px] ">
          <Link onClick={() => setQiaodan((qiaodan) => !qiaodan)}>Qiaodan</Link>
          {qiaodan && (
            <div className=" ">
              <ul className="px-[5px]">
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    New <BsChevronCompactRight />
                  </Link>
                </li>
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    Men <BsChevronCompactRight />
                  </Link>
                </li>
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    Women <BsChevronCompactRight />
                  </Link>
                </li>
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    Kids <BsChevronCompactRight />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="hover:bg-[rgba(0,0,0,0.1)] px-3 py-1 rounded-[3px] ">
          <Link onClick={() => setNewBalance((newBalance) => !newBalance)}>
            NewBalance
          </Link>
          {newBalance && (
            <div className=" ">
              <ul className="px-[5px]">
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    New <BsChevronCompactRight />
                  </Link>
                </li>
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    Men <BsChevronCompactRight />
                  </Link>
                </li>
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    Women <BsChevronCompactRight />
                  </Link>
                </li>
                <li>
                  <Link className=" text-lg text-[rgba(0,0,0,0.7)] hover:text-[rgba(0,0,0,0.9)] flex-between">
                    Kids <BsChevronCompactRight />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ListNav;
