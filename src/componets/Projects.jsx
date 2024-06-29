import React from "react";
import mydata from "../data/projectdata";
import Projectcard from "./Projectcard";

function Projects() {
  return (
    <section id="projects" className="h-auto md:h-screen">
      <div className="py-8 md:py-24 md:px-10">
        <div className="text-center italic text-xl">
          <h3 className="text-2xl font-mono font-semibold">--- Projects ---</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-8 md:pt-16 px-4 md:px-12 lg:gap-12">
          {mydata &&
            mydata.map((item) => <Projectcard key={item.id} {...item} />)}
        </div>
      </div>
    </section>
  );
}

export default Projects;
