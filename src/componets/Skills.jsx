import React from "react";
import StackIcon from "tech-stack-icons";

function Skills() {
  return (
    <section id="skills" className="h-auto md:h-screen w-full  ">
      <div className="flex justify-center  py-8 md:py-24 ">
        <div className="text-center italic text-xl  md:w-3/4">
          <h3 className="text-2xl font-mono font-semibold">--- Skills ---</h3>

          <div className="flex flex-wrap items-center justify-center px-4 py-4 space-y-16 ">
            <StackIcon className="px-8 hover:translate-x-1" name="html5" />
            <StackIcon className="px-8 hover:translate-x-1" name="css3" />
            <StackIcon className="px-8 hover:translate-x-1" name="js" />
            <StackIcon className="px-8 hover:translate-x-1" name="reactjs" />
            <StackIcon className="px-8 hover:translate-x-1" name="c++" />
            <StackIcon className="px-8 hover:translate-x-1" name="jest" />
            <StackIcon className="px-8 hover:translate-x-1" name="tailwindcss" />
            <StackIcon className="px-8 hover:translate-x-1" name="redux" />
            <StackIcon className="px-8 hover:translate-x-1" name="reactrouter" />
            <StackIcon className="px-8 hover:translate-x-1" name="firebase" />
            <StackIcon className="px-8 hover:translate-x-1" name="vscode" />
            <StackIcon className="px-8 hover:translate-x-1" name="python" />
            <StackIcon className="px-8 hover:translate-x-1" name="mysql" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
