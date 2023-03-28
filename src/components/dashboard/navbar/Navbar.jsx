import React from "react";

const Navbar = () => {
  return (
    <div className=" navbar grid grid-cols-3 bg-[#210454] h-20 text-white place-content-center justify-center gap-4">
      {/* logo */}
      <div className="m-4 flex  justify-item-start">
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0.666645L10.2987 0.0706444C10.206 0.024189 10.1037 0 10 0C9.89632 0 9.79405 0.024189 9.70134 0.0706444L10 0.666645ZM0 20H20V18.6667H0V20ZM9.70134 0.0706444L1.70134 4.07065L2.29867 5.26265L10.2987 1.26265L9.70134 0.0706444V0.0706444ZM0 7.99999H20V6.66665H0V7.99999ZM18.2987 4.07065L10.2987 0.0706444L9.70134 1.26265L17.7014 5.26265L18.2987 4.07065ZM6.66667 10.6667V16H8.00001V10.6667H6.66667ZM12 10.6667V16H13.3333V10.6667H12ZM1.33333 7.33332V19.3333H2.66667V7.33332H1.33333ZM17.3334 7.33332V19.3333H18.6667V7.33332H17.3334Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="font-bold text-xl">McqHall</div>
      </div>

      {/* search  */}
      <div className="flex h-9">
        <input
          type="text"
          placeholder="search"
          className=" placeholder:m-4 bg-[#210454] border border-slate-500 text-slate-500 w-96 h-9"
        />
        <span className="bg-[#08a4bd] w-8 item-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
      </div>
      {/* account  */}
      <div className="grid justify-items-end ">
        <span className="border-3 border-white rounded-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
