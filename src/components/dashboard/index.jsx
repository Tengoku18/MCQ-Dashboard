import React from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Content from "./content/Content";

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* <Navbar />
      <div className="flex  top-10 right-2">
        <div className="h-screen sticky top-0 ">
          <Sidebar />
        </div>
        <div>
          <Content />
        </div>
      </div> */}

      <header className="fixed  top-0">
        <Navbar />
      </header>

      <section className="static  flex w-screen ">
        <div className="fixed top-14 h-full">
          <Sidebar />
        </div>

        <div className="absolute left-72 top-14 -z-20">
          <Content />
        </div>
      </section>
    </div>
  );
};

export default Index;
