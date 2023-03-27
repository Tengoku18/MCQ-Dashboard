import React from "react";

const Recommend = () => {
  const List = [
    {
      set: "23",

      published: "21 hours",
    },
    {
      set: "22",

      published: "2 days",
    },
    {
      set: "21",

      published: "3 days",
    },
    {
      set: "20",

      published: "4 days",
    },
    {
      set: "19",

      published: "5 days",
    },
    {
      set: "18",

      published: "6 days",
    },
  ];

  return (
    <div>
      <div className="text-xl font-bold">Recommend</div>
      <div className="grid grid-cols-3 justify-items-center">
        {List.map((items) => {
          return (
            <div className="grid h-auto min-w-[180px] max-w-[320px] bg-white border border-white p-1 rounded-sm items-start shadow-lg m-4">
              <div className="grid grid-rows-6 ">
                <div className="grid grid-cols-5">
                  <div className="justify-self-start col-span-4">
                    set {items.set} | Civil Engineer Gazzetted 3rd Class Officed
                    | Loksewa
                  </div>
                  <div className="justify-self-end">
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
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="text-primary">McqHall</div>
                  <div className="text-slate-600">
                    published {items.published} ago
                  </div>
                </div>
                <div className="grid row-span-2">
                  <div className="flex flex-wrap justify-center content-center">
                    <span className="bg-slate-600 m-1">government job</span>
                    <span className="bg-slate-600 m-1">
                      nepal Engineering
                    </span>{" "}
                    <span className="bg-slate-600 m-1">
                      Civil Engineer Officer Level 3
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 justify-between gap-x-6">
                  <div className="grid grid-cols-2 grid-rows-2  ">
                    <span className="row-span-2 justify-self-end">
                      <img
                        src="https://mcqhall.com/star_rating.svg"
                        alt="Icon"
                        className="h-5 w- 5 pt-0.5"
                      />
                    </span>
                    <span className="justify-self-start">5.0</span>
                    <span className="justify-self-start">Rating</span>
                  </div>
                  <div className="grid grid-cols-2 grid-rows-2">
                    <span className="row-span-2 justify-self-end">
                      <img
                        src="https://mcqhall.com/team-blue.svg"
                        alt="Icon"
                        className="h-5 w- 5 pt-0.5"
                      />
                    </span>
                    <span className="justify-self-start">733</span>
                    <span className="justify-self-start">appeared</span>
                  </div>
                </div>
                <div className="w-[100%] free bg-primary-white text-white  ">
                  <div className="grid justify-items-center my-3 cente ">
                    Free
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommend;
