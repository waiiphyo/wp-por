import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-left text-4xl font-bold">
              <p>
                Hi. I'm Wai Phyo, nice to meet you.
              </p>
            </div>
            <div>
              <p>
                {" "}
                My primary focus is on ensuring that software development and operations teams work together effectively to deliver high-quality software products and services.
                My role involves automating and streamlining the software development process, from code creation to deployment and beyond, using a variety of tools and techniques. This includes continuous integration and deployment (CI/CD), infrastructure as code (IaC), monitoring and logging, Microservices like Docker, Kubernetes, and more.
                In addition to technical skills, I also possess strong communication and collaboration abilities, as I work closely with both developers and operations teams to ensure seamless integration and delivery of software. My goal is to enable faster, more reliable software delivery, while ensuring that the overall system is secure, scalable, and highly available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;