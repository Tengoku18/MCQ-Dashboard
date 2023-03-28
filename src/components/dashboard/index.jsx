import React from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Content from "./content/Content";

const Index = () => {
  return (
    <div className=" relative  flex flex-col top-0 left-0 h-screen w-screen overflow-scroll ">
      <header className=" w-full ">
        <Navbar />
      </header>

      <section className="absolute top-16 left-0 flex w-full">
        <aside className="">
          <Sidebar />
        </aside>

        <div className="w-1/4">
          <Content />
        </div>
      </section>
    </div>
  );
};

export default Index;
