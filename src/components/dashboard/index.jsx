import React from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Content from "./content/Content";

const Index = () => {
  return (
    <div className="fixed flex flex-col top-0 left-0 h-screen w-screen bg-primary-white">
      <header className=" w-full ">
        <Navbar />
      </header>

      <section className="flex">
        <aside className="w-1/2">
          <Sidebar />
        </aside>

        <div className="w-full">
          <Content />
        </div>
      </section>
    </div>
  );
};

export default Index;
