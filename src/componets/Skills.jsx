import React from "react";
import StackIcon from "tech-stack-icons";

function Skills() {
  return (
    <section id="skills" className="h-auto w-full  ">
      <div className="flex justify-center  ">
        <div className="text-center italic text-xl py-10 md:py-24 md:w-3/4">
          <h3 className="text-2xl font-mono font-semibold">--- Skills ---</h3>

          <div className="flex flex-wrap items-center justify-center px-4 py-4 mt-5 space-y-16 ">
            <StackIcon className="px-8" name="html5" />
            <StackIcon className="px-8" name="css3" />
            <StackIcon className="px-8" name="js" />
            <StackIcon className="px-8" name="reactjs" />
            <StackIcon className="px-8" name="c++" />
            <StackIcon className="px-8" name="jest" />
            <StackIcon className="px-8" name="tailwindcss" />
            <StackIcon className="px-8" name="redux" />
            <StackIcon className="px-8" name="reactrouter" />
            <StackIcon className="px-8" name="firebase" />
            <StackIcon className="px-8" name="vscode" />
            <StackIcon className="px-8" name="python" />
            <StackIcon className="px-8" name="mysql" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
