import React from "react";

function About() {
  return (
    <section id="about" className="md:h-auto h-auto w-full flex items-center justify-center">
      <div className="flex flex-col items-center md:py-24 py-6 px-6 md:px-8 lg:px-24">
        <div className="text-center italic text-xl mb-8">
          <h3 className="text-2xl font-mono font-semibold">--- About ---</h3>
        </div>
        <div className="flex flex-col lg:flex-row items-center  md:py-20 md:px-14 px-2 py-2 justify-center mt-5">
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img
              className="h-40 w-40 md:h-60 md:w-60 rounded-full"
              src="https://imgs.search.brave.com/Ucj1y-2NA9SlbFc6EyUzLGawQIRXVCBwiOoDOsw9YXQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9nZXRp/bGx1c3RyYXRpb25z/LmItY2RuLm5ldC8v/cGhvdG9zL3BhY2sv/M2QtYXZhdGFyLW1h/bGVfbGcucG5n"
              alt="Profile"
            />
          </div>
          <div className="md:ml-14 md:px-4 mt-5">
            <div className="px-4">
              <p className="text-lg text-gray-700 mb-4">
                Hello! I'm [Your Name], a passionate [Your Profession] based in [Your Location]. I specialize in [Your Specialization], and I love creating innovative and efficient solutions to complex problems.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With [X] years of experience in the industry, I have honed my skills in [Key Skill 1], [Key Skill 2], and [Key Skill 3]. I enjoy working with teams and am always eager to learn new technologies and methodologies to improve my craft.
              </p>
              <p className="text-lg text-gray-700">
                When I'm not working, you can find me [Your Hobbies or Interests]. I believe in maintaining a healthy work-life balance and continuously strive to better myself both professionally and personally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
